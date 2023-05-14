import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreE : string = '' ;
  nombreEmpresa : string = '' ;
  esTrabajoActual: string = '' ;
  fechaInicio : string = '' ;
  fechaFin : string = '' ;
  descripcionE : string = '' ;

  constructor(private servExperiencia: ServExperienciaService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.nombreEmpresa, this.esTrabajoActual, this.fechaInicio, this.fechaFin, this.descripcionE);
    this.servExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
  }, err => {
    alert("Falló");
    this.router.navigate(['']);
  }
  )
  }
}
