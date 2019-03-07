import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/model/classes/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* URL do Servidor com o parametro login */
  url = environment.urlBaseServidor + 'login';

  usuario: Usuario;

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.usuario = new Usuario();
  }

  /* Login */
  login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario, environment.httpOptions)
      .pipe(tap(
        data => {
          this.usuario = data as Usuario;
          localStorage.setItem('usuarioSessao', JSON.stringify(usuario)); //armazena os dados do Usuario no localStorage

        }
      ));
    /* this.usuarioLogado = true;
     return of<Usuario>(usuario); */
  }

  /* logout */
  logout() {
    localStorage.removeItem('usuarioSessao'); // Romeve o Usuario do localStorade
    this.router.navigate(['/login']);

  }

  /*verificando se usuario estar logado ou não */
  getUsuarioLogado(): boolean {
    if (localStorage.getItem('usuarioSessao') != null) {
      return true;
    } else {
      return false;
    }
  }


}
