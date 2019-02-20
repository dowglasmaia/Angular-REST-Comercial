import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

/* bootstrap ngx */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { AppComponent } from './app.component';

/* Modulos de Componentes do Sistema*/
import { CargoComponent } from './components/cadastros/cargo/cargo.component';
import { CargoDetalheComponent } from './components/cadastros/cargo/cargo-detalhe/cargo-detalhe.component';

/* imports dos Modulos do PrimeNG - https://www.primefaces.org/primeng */
import { ToolbarModule } from 'primeng/toolbar';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    CargoComponent,
    CargoDetalheComponent,
    NaoEncontradoComponent,
    HomeComponent,
    LoginComponent
  ],

  /* Declara os Imports no imports: []*/
  imports: [
    BrowserModule,
    ToolbarModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule, // nesserario para usar o formalario
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    HttpClientModule, //modulo para fazer requisições http ao servidor
    BsDropdownModule.forRoot(),
    PasswordModule,
    ButtonsModule
  ],

  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
