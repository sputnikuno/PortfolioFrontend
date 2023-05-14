import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})

export class ExperienciasComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private servExperiencia: ServExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

cargarExperiencia():void{
  this.servExperiencia.lista().subscribe(data => {
    this.expe = data;});
}

eliminar(id?: number) {
  if (id != undefined) {
    // Mostrar mensaje de confirmación
    if (confirm("¿Estás seguro de que deseas eliminar esta experiencia?")) {
      this.servExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        },
        err => {
          alert("No se pudo borrar la experiencia");
        }
      );
    }
  }
}


}


//export class ExperienciasComponent implements OnInit {
//  experienciasList:any;
//  constructor(private datosPortfolio:PortfolioService) { }

//  ngOnInit(): void {
//    this.datosPortfolio.obtenerDatos().subscribe(data=> {
//      this.experienciasList = data.expertise;
//    })
//  }


