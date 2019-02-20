import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { tab } from 'rxjs/operators';
import { urlBaseServidor, httpOptions } from './../../classes/variaveis-globais';
import { Usuario } from './../../classes/cadastros/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* URL do Servidor com o parametro login */
  url = urlBaseServidor + 'login';

  usuarioLogado: boolean = false;

  constructor(private http: HttpClient) { }

  /* Login */
  login(usuario: Usuario): Observable<Usuario> {
    /* return this.http.post<Usuario>(this.url, usuario, httpOptions).pipe(
       tab(
         data => {
           this.usuarioLogado = true;
         }
       )); */
    this.usuarioLogado = true;
    return of<Usuario>(usuario);
  }

  /* logout */
  logout() {
    this.usuarioLogado = false;
  }

}
