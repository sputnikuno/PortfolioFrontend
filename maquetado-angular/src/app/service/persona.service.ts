import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthotities';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private url: string = 'http://localhost:8080/personas/traer/perfil';

  constructor(private http: HttpClient) { }

  getPersona(): Observable<persona> {
    const headers = new HttpHeaders({
      'Authorization': 'Aguila99',
      'Content-Type': 'application/json'
    });
    return this.http.get<persona>(this.url, { headers });
  }
}
