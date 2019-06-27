import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Reserva } from '../interface/reserva';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-cliente-reserva',
  templateUrl: './cliente-reserva.page.html',
  styleUrls: ['./cliente-reserva.page.scss'],
})
export class ClienteReservaPage implements OnInit {

  //variables
  reserva: Reserva;

  event = {
    title: '',
    startTime: '',
    endTime: ''
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  
  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID)
    private locale: string,
    private reservaService: ReservasService) {
    //Inicializacion del constructor
    this.reserva = {
      idUsuario:"", idNegocio: "", estado: "",
      evento: {
        nombre: "", inicio: "", fin: ""
      }
    }
  }

  ngOnInit() {
    //this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  // Create the right event format and reload source
  addEvent() {
    let evento = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime)
    }

    this.reservar(evento); // agregar a la lista de eventos
    /*this.eventSource.push(evento);
    this.myCal.loadEvents();
    this.resetEvent();*/
  }

  //Funcionamiento de los botones para cambiar de mes
  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['ace']
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }

  async reservar(evento){
    this.reserva.evento.nombre = evento.title;
    this.reserva.evento.inicio =  evento.startTime.toISOString();
    this.reserva.evento.fin = evento.endTime.toISOString();
    this.reserva.estado = "solicitud";
    this.reserva.idUsuario = "asdasd";
    this.reserva.idNegocio = "negocio 1";

    this.reservaService.crear(this.reserva).then(resultado=>{

      console.log(resultado);
    });

    
   
  } 


}
