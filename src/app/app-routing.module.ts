import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';
import { HomeComponent } from './paginas/home/home.component';
import { MaterialComponent } from './paginas/material/material.component';
import { PagenotfoundComponent } from './paginas/pagenotfound/pagenotfound.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "formularios", component: FormulariosComponent},
  {path: "formularios2", component: Formularios2Component},
  {path: "material", component: MaterialComponent},
  {path: "ruta-2/:id/:slug", component: Ruta2Component},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
