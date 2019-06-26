export interface Negocio {
    $key: string;
    nombre: string;
    costo: number;
    ubicacion: string;
    latitud: number;
    longitud: number;
    estado: string;
    detalle: {
        bar: boolean,
        capasidad: number,
        escenario: boolean,
        garage: boolean,
        garsones: number,
        servicioComida: boolean,
        tipoSalon: string
    }
}
