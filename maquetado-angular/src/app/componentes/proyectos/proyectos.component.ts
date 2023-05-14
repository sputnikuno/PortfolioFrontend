import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList:any;
  constructor(private datosPortfolio:PortfolioService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=> {
      this.proyectosList = data.projects;

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    })
  }
}