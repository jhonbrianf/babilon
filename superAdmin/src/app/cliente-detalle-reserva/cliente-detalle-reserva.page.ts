import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Reserva } from '../interface/reserva';
import { ReservasService } from '../services/reservas.service';
import { NegociosService } from '../services/negocios.service';
import { ActivatedRoute } from '@angular/router';
import { Negocio } from '../interface/negocio';

@Component({
  selector: 'app-cliente-detalle-reserva',
  templateUrl: './cliente-detalle-reserva.page.html',
  styleUrls: ['./cliente-detalle-reserva.page.scss'],
})
export class ClienteDetalleReservaPage implements OnInit {

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
  idNegocio: string;
  nombreNegocio: string;
  idReserveObtenida: string;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID)
    private locale: string,
    private reservaService: ReservasService,
    private negocioService: NegociosService,
    private activeRoute: ActivatedRoute, ) {
    // Inicializacion del constructor
    this.reserva = {
      idUsuario: '', idNegocio: '', estado: '',
      evento: { title: '', startTime: '', endTime: '' }
    }

  }

  ngOnInit() {
    //this.resetEvent();
    this.obtenerDatos();
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
    selected.setHours(selected.getHours() + 1);
    this.reserva.evento.endTime = (selected.toISOString());
  }

  listarReservas() {
    let fecha1, fecha2;
    this.eventSource = [];
    this.reservaService.listar().subscribe(resultado => {
      resultado.forEach(element => {
        if (element.idNegocio == this.idNegocio && element.estado == "aceptada") {
          fecha1 = new Date(element.evento.startTime);
          fecha2 = new Date(element.evento.endTime);
          element.evento.startTime = fecha1;
          element.evento.endTime = fecha2;
          this.eventSource.push(element.evento);
        }
      });

      this.myCal.loadEvents();
      console.log("reservas", this.eventSource);
    });
  }

  obtenerDatos() {
    this.idReserveObtenida = this.activeRoute.snapshot.paramMap.get('idReserva');
    this.reservaService.obtenerDatos(this.idReserveObtenida).valueChanges().subscribe((resultado: Reserva) => {
      this.idNegocio = resultado.idNegocio;
      this.obtenerNombreNegocio();
    });
  }
  
  obtenerNombreNegocio() {
    console.log(this.idNegocio);
    this.negocioService.obtenerDatos(this.idNegocio).valueChanges().subscribe((resultado: Negocio) => {
      console.log("Nombre: ", resultado.nombre);
      this.nombreNegocio = resultado.nombre;
    });
  }
}
