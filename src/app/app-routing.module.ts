import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CargoComponent } from './components/cadastros/cargo/cargo.component';

/**
 * @author Dowglas maia
 * Classe Responsavel por Fazer a Rota de Navegação entre as
 * Paginas da Aplicação
 */

const routes: Routes = [
  { path: 'cargo', component: CargoComponent }
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
