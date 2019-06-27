import { Component, OnInit } from '@angular/core';
import { Reserva } from '../interface/reserva';
import { ReservasService } from '../services/reservas.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  reservasAceptadas: Reserva[] = [];
  reservasRechazadas: Reserva[] = [];

  constructor(
    private reservaService: ReservasService,
    private toastController: ToastController,
    private router: Router) {
    // Inicializacion del constructor
  }

  ngOnInit() {
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
    this.reservasAceptadas = [];
    this.reservasSolicitudes = [];
    this.reservasRechazadas = [];

    this.reservas.forEach(element => {
      if (element.estado == "solicitud") {
        this.reservasSolicitudes.push(element);
      } if (element.estado == "aceptada") {
        this.reservasAceptadas.push(element);
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

  eliminar(item){
    this.reservaService.eliminar(item.key);
    this.mensajeToast("Reserva Eliminada Exitosamente.");
  }

  detalleReserva(item){
    this.router.navigate(['/cliente-detalle-reserva', item.key]);
  }
}
