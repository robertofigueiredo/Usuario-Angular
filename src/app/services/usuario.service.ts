import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { Response } from '../models/Response';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private apiUrl = `${environment.ApiUrl}/GetAllUsuario`

  constructor( private http: HttpClient) { }

  GetUsuarios() : Observable<Response<Usuario[]>>{
    return this.http.get<Response<Usuario[]>>(this.apiUrl);
  }

  GetUsuarioFiltro(id : number) : Observable<Response<Usuario>> {
    return this.http.get<Response<Usuario>>(`${environment.ApiUrl}/GetIdUsuario/${id}`);
  }

  CreateUsuario(usuario : Usuario) : Observable<Response<Usuario[]>>{
    return this.http.post<Response<Usuario[]>>(`${environment.ApiUrl}/CreateUsuario`,usuario)
  }

  EditarUsuario(usuario : Usuario) : Observable<Response<Usuario[]>>{
    return this.http.put<Response<Usuario[]>>(`${environment.ApiUrl}/UpdateUsuario`,usuario)
  }

  ExcluirUsuario(id : number) : Observable<Response<Usuario[]>>{
    return this.http.delete<Response<Usuario[]>>(`${environment.ApiUrl}/DeleteUsuario/${id}`);
  }
}
