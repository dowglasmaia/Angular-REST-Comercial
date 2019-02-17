import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Modulos de Componentes do Sistema*/
import { CargoComponent } from './components/cadastros/cargo/cargo.component';

/* Modulos do PrimeNG - https://www.primefaces.org/primeng */
import { ToolbarModule } from 'primeng/toolbar';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CargoComponent
  ],

  /* Declara os Imports no imports: []*/
  imports: [
    BrowserModule,
    ToolbarModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
