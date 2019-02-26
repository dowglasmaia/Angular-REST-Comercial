/**
 * @author Dowglas maia
 * @email dowglasmaia@live.com
 *
 * Classe Responsavel por Fazer a Rota de Navegação entre as
 * Paginas da Aplicação
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CargoComponent } from './components/cadastros/cargo/cargo.component';
import { CargoDetalheComponent } from './components/cadastros/cargo/cargo-detalhe/cargo-detalhe.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ColaboradorComponent } from './components/cadastros/colaborador/colaborador.component';
import { ColaboradorDetalheComponent } from './components/cadastros/colaborador-detalhe/colaborador-detalhe.component';



/* Definindo as Rotas, da Aplicação - (1:path(url), - 2:componente )*/
const routes: Routes = [
  /* Definindo Padrão de Rotas - para Todas Passarem pela Guarda de Rotas */
  {   path: '', canActivate: [AuthGuardService],
      children: [
        { path: '', component: HomeComponent },
        { path: 'cargos', component: CargoComponent },
        { path: 'cargo/novo', component: CargoDetalheComponent },
        { path: 'cargo/:id', component: CargoDetalheComponent },
        { path: 'nao-encontrado', component: NaoEncontradoComponent },
        { path: 'colaborador', component: ColaboradorComponent },
        { path: 'colaborador/novo', component: ColaboradorDetalheComponent },
        { path: 'colaborador/:id', component: ColaboradorDetalheComponent },
    ]},

  { path: 'login', component: LoginComponent }

];

@NgModule({
  declarations: [],
  imports: [
 
  CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
