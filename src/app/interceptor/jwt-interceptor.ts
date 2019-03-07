import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/classes/usuario';


/* Classe Responsavel por Interceptar Todas as Requisições que serão invadas para o servidor */

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('Passou peplo Interceptor');

        /* pegando o Usuario em JSON do localStorage e convertendo para o Objeto Usuario*/
        let usuario: Usuario = JSON.parse(localStorage.getItem('usuarioSessao'));
        if (usuario && usuario.token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + usuario.token
                }
            })
        }
        return next.handle(req);
    }
}
