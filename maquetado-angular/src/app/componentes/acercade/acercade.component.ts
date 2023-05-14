import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("", "", "");
  isLogged = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data});
 
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  }

}
