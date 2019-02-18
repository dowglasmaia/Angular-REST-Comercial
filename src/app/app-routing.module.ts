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


/* Definindo as Rotas, da Aplicação - (1:path(url), - 2:componente )*/
const routes: Routes = [
  { path: 'cargo', component: CargoComponent },
  { path: 'cargo/novo', component: CargoDetalheComponent },
  { path: 'cargo/:id', component: CargoDetalheComponent }
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
