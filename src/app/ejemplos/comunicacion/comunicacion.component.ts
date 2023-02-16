import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {
  textoTitulo:string="el gran mago de..";
  textoSubtitulo:string="vivió cuando..";
  hijo:string;

  constructor() { }

  ngOnInit(): void {
  }

  actualizarHijo(value:string)
  {
    this.hijo=value;
  }

}
