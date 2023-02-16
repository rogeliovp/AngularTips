import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comunicacion2',
  templateUrl: './comunicacion2.component.html',
  styleUrls: ['./comunicacion2.component.css']
})
export class Comunicacion2Component implements OnInit {
  @Input() titulo:string;
  @Input() subtitulo:string;
  @Output() valordelhijo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.valordelhijo.emit("valor desde el hijo");
  }

}
