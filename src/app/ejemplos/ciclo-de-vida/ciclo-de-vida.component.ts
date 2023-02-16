import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit {

  texto:string="texto inicial";
  constructor() 
  {
    console.log("ejecucion desde el constructor.");

  }

  ngOnInit(): void {
    console.log("ejecucion desde OnInit.");
  }

  ngOnDestroy()
  {
    console.log("ejecucion desde OnDestroy.");
  }

  ngDoCheck()
  {
    console.log("se ejecuta cuando el componente es afectado por algun cambio");
  }

  cambiarTexto()
  {
    this.texto="otro texto con pan";
    console.log("ejecucion del ngDoCheck cambio de texto.")
  }

}
