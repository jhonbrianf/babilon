export interface Negocio {
    $key: string;
    nombre: string;
    costo: number;
    ubicacion: string;
    latitud: string;
    longitud: string;
    estado: string;
    detalle: {
        bar: string,
        capasidad: number,
        escenario: string,
        garage: string,
        garsones: string,
        servicio_comida: string,
        tipo_salon: string
    }
}
