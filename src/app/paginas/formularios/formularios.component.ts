import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  usuario:any;
  paises:Array<any>;
  users:Array<any>=[];

  constructor() 
  { 
    this.usuario = {
      nombre:"",
      correo:"",
      telefono:"",
      direccion:"",
      pais:""
    }
  }

  ngOnInit(): void {
    this.paises = [
      {
        nombre: "Chile",
        dominio: "cl"
      },
      {
        nombre: "Perú",
        dominio: "pe"
      },
      {
        nombre: "Argentina",
        dominio: "ar"
      }
    ];
  }

  checkboxMarca:boolean=false;
  seleccionaCheck(evento:any)
  {
    if(evento.target.checked)
    {
      this.checkboxMarca = true;
      alert("Si");
    }
    else
    {
      this.checkboxMarca = false;
      alert("No");
    }

  }

  enviar()
  {
    //alert(this.usuario.nombre + " " + this.usuario.correo + " " + this.usuario.telefono);
    this.users.push(
      {
        nombre:this.usuario.nombre,
        correo:this.usuario.correo,
        telefono:this.usuario.telefono,
        direccion:this.usuario.direccion,
        pais:this.usuario.pais
      }
    )
  }

}
