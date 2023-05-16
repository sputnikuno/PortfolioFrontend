import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.apiURL + 'auth/';

  constructor(private httpCLient: HttpClient) { }

public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
  return this.httpCLient.post<any>(this.authURL + 'nuevo', nuevoUsuario)
}  

public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
  return this.httpCLient.post<JwtDto>(this.authURL + 'login', loginUsuario)
}
}
