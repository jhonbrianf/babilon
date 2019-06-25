export interface Negocio {
    $key: string;
    nombre: string;
    costo: number;
    ubicacion: string;
    latitud: string;
    longitud: string;
    estado: string;
    detalle: {
        bar: boolean,
        capasidad: number,
        escenario: boolean,
        garage: boolean,
        garsones: number,
        servicio_comida: boolean,
        tipo_salon: string
    }
}
