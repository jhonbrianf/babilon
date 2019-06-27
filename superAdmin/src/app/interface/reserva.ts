export interface Reserva {
    idUsuario: string;
    idNegocio: string;
    evento: {
        title: string;
        startTime: string;
        endTime: string;
    }
    estado: string;
}
