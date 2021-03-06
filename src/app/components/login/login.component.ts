import { Component, OnInit } from '@angular/core';


import { LoginService } from './../../services/login/login.service';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/classes/usuario';
import { VariaveisGlobais } from 'src/app/model/variaveis-globais';

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
    this.loginService.login(this.usuario).subscribe(
      obj => {
        this.usuario = obj;
        this.router.navigate(['']); // redireciona para a pagina home caso o login seja concluido!
      },
      error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }

  /* Verifica se os campo de login e senha foram informados - e retorna true ou false , 
  * Habilitando ou Desabilitando o Botao de Logar */
  botaoDesabilitado(): boolean {
    return !(this.usuario.login && this.usuario.senha);
  }
}
