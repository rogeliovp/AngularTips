import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  disable:boolean=false;
  color:string="red";
  img:string="LOGONEGRO.png";
  alto:number=200;
  ancho:number=200;
  constructor() { }

  ngOnInit(): void {
  }

  cambiar()
  {
    if(this.img === "LOGONEGRO.png")
    {
      this.img = "LOGOBLANCO.png"
    }
    else
    {
      this.img = "LOGONEGRO.png"
    }
  }

}
