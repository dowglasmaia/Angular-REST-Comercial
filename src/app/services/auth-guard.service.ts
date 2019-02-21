/*
Class para Guarda de Rotas, fazendo um filtro na requisiçao da mesma.
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService,
    private router: Router) { }

  /* Metodo sera Chamando sempre que o Usuario fizer Alguma Rota, autorizando ou negando a mesma! */
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


    if (this.loginService.getUsuarioLogado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
