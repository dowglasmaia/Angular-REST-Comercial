import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';

/* Modulos de Componentes do Sistema*/
import { CargoComponent } from './components/cadastros/cargo/cargo.component';
import { CargoDetalheComponent } from './components/cadastros/cargo/cargo-detalhe/cargo-detalhe.component';
import { JwtInterceptor } from './interceptor/jwt-interceptor';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

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
import { PasswordModule } from 'primeng/password';
import { ColaboradorComponent } from './components/cadastros/colaborador/colaborador.component';
import { ColaboradorDetalheComponent } from './components/cadastros/colaborador-detalhe/colaborador-detalhe.component';



@NgModule({
  declarations: [
    AppComponent,
    CargoComponent,
    CargoDetalheComponent,
    NaoEncontradoComponent,
    HomeComponent,
    LoginComponent,
    ColaboradorComponent,
    ColaboradorDetalheComponent
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
    PasswordModule,

  ],

  providers: [ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } /*declarando o privide do HTTP_INTERCEPETOR para a Class jwtInterceptor*/
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
