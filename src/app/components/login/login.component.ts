import { Component, OnInit } from '@angular/core';

import { Usuario } from './../../classes/cadastros/usuario';
import { LoginService } from './../../services/login/login.service';
import { VariaveisGlobais } from './../../classes/variaveis-globais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario;

  constructor(
    private loginService: LoginService,
    private global: VariaveisGlobais,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  /* Login */
  login() {
    this.loginService.login(this.usuario).subscribe(obj => {
      this.usuario = obj;
      this.router.navigate(['/home']); // redireciona para a pagina home caso o login seja concluido!
    },
      error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }
}
