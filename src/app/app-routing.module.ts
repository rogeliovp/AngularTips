import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';
import { HomeComponent } from './paginas/home/home.component';
import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import { MaterialCardComponent } from './paginas/material-card/material-card.component';
import { MaterialDialogComponent } from './paginas/material-dialog/material-dialog.component';
import { MaterialExpansionComponent } from './paginas/material-expansion/material-expansion.component';
import { MaterialInputComponent } from './paginas/material-input/material-input.component';
import { MaterialTabsComponent } from './paginas/material-tabs/material-tabs.component';
import { MaterialComponent } from './paginas/material/material.component';
import { ModalComponent } from './paginas/modal/modal.component';
import { PagenotfoundComponent } from './paginas/pagenotfound/pagenotfound.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "formularios", component: FormulariosComponent},
  {path: "formularios2", component: Formularios2Component},
  {path: "material", component: MaterialComponent},
  {path: "material/botones", component: MaterialBotonesComponent},
  {path: "material/input", component: MaterialInputComponent},
  {path: "material/tabs", component: MaterialTabsComponent},
  {path: "material/dialog", component: MaterialDialogComponent},
  {path: "material/expansion", component: MaterialExpansionComponent},
  {path: "material/card", component: MaterialCardComponent},
  {path: "modal", component: ModalComponent},
  {path: "ruta-2/:id/:slug", component: Ruta2Component},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
