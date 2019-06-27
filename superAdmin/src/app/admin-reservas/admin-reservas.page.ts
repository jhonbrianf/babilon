import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { Reserva } from '../interface/reserva';
import { ReservasService } from '../services/reservas.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { NegociosService } from '../services/negocios.service';
import { ActivatedRoute } from '@angular/router';
import { Negocio } from '../interface/negocio';

@Component({
  selector: 'app-admin-reservas',
  templateUrl: './admin-reservas.page.html',
  styleUrls: ['./admin-reservas.page.scss'],
})
export class AdminReservasPage implements OnInit {

  // variables
  segmento: string = "solicitudes";
  reservas: Reserva[] = [];
  reservasSolicitudes: Reserva[] = [];
  reservasRechazadas: Reserva[] = [];

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  // Variables
  reserva: Reserva;
  nombreNegocio: string;
  idReserveObtenida: string;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID)
    private locale: string,
    private reservaService: ReservasService,
    private toastController: ToastController,
    private router: Router,
    private negocioService: NegociosService,
    private activeRoute: ActivatedRoute, ) {
    // Inicializacion del constructor
    this.reserva = {
      idUsuario: '', idNegocio: '', estado: '',
      evento: { title: '', startTime: '', endTime: '' }
    }
  }

  ngOnInit() {
    //this.obtenerDatos();
    this.listarReservas();
  }

  segmentChanged(ev: any) {
    this.segmento = ev.detail.value;
  }

  async listarReservas() {
    this.reservas = [];
    this.reservaService.listar().subscribe(resultado => {
      this.reservas = resultado;
      this.validacionReservas()
    });
  }

  validacionReservas() {
    this.reservasSolicitudes = [];
    this.reservasRechazadas = [];
    this.eventSource = [];

    let fecha1, fecha2, idnegocio;

    this.reservas.forEach(element => {
      if (element.estado == "solicitud") {
        this.reservasSolicitudes.push(element);
      } if (element.estado == "aceptada") {
        idnegocio = element.idNegocio;
        this.obtenerNombreNegocio(idnegocio);
        fecha1 = new Date(element.evento.startTime);
        fecha2 = new Date(element.evento.endTime);
        element.evento.startTime = fecha1;
        element.evento.endTime = fecha2;
        this.eventSource.push(element.evento);
      } if (element.estado == "rechazado") {
        this.reservasRechazadas.push(element);
      }
    });
  }

  aceptar(item) {
    item.estado = "aceptada";
    this.reservaService.actualizar(item.key, item).then(resuldato => {
      this.mensajeToast("Reserva Aceptada");
    });

    this.listarReservas();
  }

  rechazar(item) {
    item.estado = "rechazado";
    this.reservaService.actualizar(item.key, item).then(resuldato => {
      this.mensajeToast("Reserva Cancelada");
    });

    this.listarReservas();
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  eliminar(item) {
    this.reservaService.eliminar(item.key);
    this.mensajeToast("Reserva Eliminada Exitosamente.");
  }

  // ********** //
  // Calendario

  resetEvent() {
    this.reserva = {
      idUsuario: '', idNegocio: '', estado: '',
      evento: { title: '', startTime: new Date().toISOString(), endTime: new Date().toISOString() }
    }
  }

  //FUNCTION TO BUTTONS
  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: 'Salon: ' + this.nombreNegocio,
      message: 'Inicio: ' + start + '<br><br>Fin: ' + end,
      buttons: ['Continuar']
    });

    await alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.reserva.evento.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.reserva.evento.endTime = (selected.toISOString());
  }

  obtenerNombreNegocio(idNegocio) {
    this.negocioService.obtenerDatos(idNegocio).valueChanges().subscribe((resultado: Negocio) => {
      this.nombreNegocio = resultado.nombre;
    });
  }

}
