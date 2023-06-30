import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthotities';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private URL: string = environment.apiURL + 'personas/';

  constructor(private httpCLient: HttpClient) {}

  public lista(): Observable<persona[]> {
    return this.httpCLient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpCLient.get<persona>(this.URL + `detail/${id}`);
  }

  public update(id: number, Persona: persona): Observable<any> {
    return this.httpCLient.put<any>(this.URL + `update/${id}`, Persona);
  }
}
