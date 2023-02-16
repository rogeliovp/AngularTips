import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo.component';
import { Ejemplo3Component } from './ejemplos/ejemplo3/ejemplo3.component';
import { BasicosComponent } from './ejemplos/basicos/basicos.component';
import { FormateaFechaPipe } from './utilidades/formatea-fecha.pipe';
import { FormateaNumerosPipe } from './utilidades/formatea-numeros.pipe';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';
import { CicloDeVidaComponent } from './ejemplos/ciclo-de-vida/ciclo-de-vida.component';
import { ComunicacionComponent } from './ejemplos/comunicacion/comunicacion.component';
import { Comunicacion2Component } from './ejemplos/comunicacion2/comunicacion2.component';
import { HomeComponent } from './paginas/home/home.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { PagenotfoundComponent } from './paginas/pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    Ejemplo3Component,
    BasicosComponent,
    FormateaFechaPipe,
    FormateaNumerosPipe,
    DataBindingComponent,
    CicloDeVidaComponent,
    ComunicacionComponent,
    Comunicacion2Component,
    HomeComponent,
    Ruta2Component,
    FormulariosComponent,
    MaterialComponent,
    PagenotfoundComponent,
    CabeceroComponent,
    FooterComponent,
    Formularios2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
