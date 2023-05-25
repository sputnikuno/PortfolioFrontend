import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthotities';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private url: string = environment.apiURL + 'personas/traer/perfil';

  constructor(private http: HttpClient) { }

  getPersona(): Observable<persona> {
    const headers = new HttpHeaders({
      'Authorization': '',
      'Content-Type': 'application/json'
    });
    return this.http.get<persona>(this.url, { headers });
  }
}
