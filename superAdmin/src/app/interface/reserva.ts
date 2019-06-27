export interface Reserva {
    idUsuario: string;
    idNegocio: string;
    evento: {
        nombre: string;
        inicio: string;
        fin: string;
    }
    estado: string;
}
