import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Reserva } from '../interface/reserva';
import { ReservasService } from '../services/reservas.service';
import { NegociosService } from '../services/negocios.service';
import { ActivatedRoute } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cliente-reserva',
  templateUrl: './cliente-reserva.page.html',
  styleUrls: ['./cliente-reserva.page.scss'],
})
export class ClienteReservaPage implements OnInit {

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
  reservaSolicitud: Reserva[] = [];
  nombreNegocio: string;
  idNegocioObtenida: string;
  segmento: string = "aceptadas";

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID)
    private locale: string,
    private reservaService: ReservasService,
    private negocioService: NegociosService,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private toastController: ToastController) {
    // Inicializacion del constructor
    this.reserva = {
      idUsuario: '', idNegocio: '', estado: '',
      evento: { title: '', startTime: '', endTime: '' }
    }

    this.idNegocioObtenida = this.activeRoute.snapshot.paramMap.get('idNegocio');
  }

  ngOnInit() {
    //this.resetEvent();
    this.listarReservas();
  }

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
    selected.setHours(selected.getHours() + 7);
    this.reserva.evento.endTime = (selected.toISOString());
  }

  // Create the right event format and reload source
  async addEvent() {
    this.reserva.estado = "solicitud";
    this.reserva.idUsuario = this.authService.email;
    this.reserva.idNegocio = this.idNegocioObtenida;

    this.reservaService.crear(this.reserva).then(resultado => {
      this.mensajeToast("Reserva realizada, esta en Solicitudes.")
    });

    this.eventSource = [];
    this.reservaSolicitud = [];
    this.resetEvent();
  }

  async listarReservas() {

    let fecha1, fecha2;
    this.eventSource = [];
    this.reservaSolicitud = [];
    this.reservaService.listar().subscribe(resultado => {
      this.obtenerNombreNegocio();
      resultado.forEach(element => {
        if (element.idNegocio == this.idNegocioObtenida && element.estado == "aceptada") {
          fecha1 = new Date(element.evento.startTime);
          fecha2 = new Date(element.evento.endTime);
          element.evento.startTime = fecha1;
          element.evento.endTime = fecha2;
          this.eventSource.push(element.evento);
        }if (element.idNegocio == this.idNegocioObtenida && element.estado == "solicitud"){
          this.reservaSolicitud.push(element);
        }
      });

      this.myCal.loadEvents();
    });
  }

  obtenerNombreNegocio() {
    this.negocioService.obtenerDatos(this.idNegocioObtenida).valueChanges().subscribe((resultado: Negocio) => {
      this.nombreNegocio = resultado.nombre;
    });
  }

  segmentChanged(ev: any) {
    this.segmento = ev.detail.value;
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
