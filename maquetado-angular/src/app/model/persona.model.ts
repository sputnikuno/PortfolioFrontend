export class persona{
    id?: number;
    nombre: string;
    image: string;
    text: string;

    constructor(nombre: string,image: string,text: string){
        this.nombre = nombre;
        this.image = image;
        this.text = text;
    }
}