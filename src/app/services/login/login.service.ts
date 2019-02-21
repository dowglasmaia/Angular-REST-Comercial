import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { urlBaseServidor, httpOptions } from './../../classes/variaveis-globais';
import { Usuario } from './../../classes/cadastros/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* URL do Servidor com o parametro login */
  url = urlBaseServidor + 'login';

  constructor(private http: HttpClient) { }

  /* Login */
  login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario, httpOptions)
      .pipe(tap(
        data => {
          localStorage.setItem('usuarioSessao', JSON.stringify(usuario)); //armazena os dados do Usuario no localStorage
        }
      ));
    /* this.usuarioLogado = true;
     return of<Usuario>(usuario); */
  }

  /* logout */
  logout() {
    localStorage.removeItem('usuarioSessao'); // Romeve o Usuario do localStorade

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
