export class Experiencia {
    id? : number;
    nombreE : string;
    nombreEmpresa : string;
    esTrabajoActual: string;
    fechaInicio : string;
    fechaFin : string;
    descripcionE : string;

    constructor(nombreE: string, nombreEmpresa: string, esTrabajoActual: string, fechaInicio: string, fechaFin: string, descripcionE: string) {
        this.nombreE = nombreE;
        this.nombreEmpresa = descripcionE;
        this.esTrabajoActual = esTrabajoActual;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcionE = descripcionE;
    }

}
