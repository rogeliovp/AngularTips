import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-formularios2',
  templateUrl: './formularios2.component.html',
  styleUrls: ['./formularios2.component.css']
})
export class Formularios2Component implements OnInit {
  formulario:FormGroup;
  paises:Array<any>;
  usuario = {
    nombre:"",
    correo:"",
    telefono:"",
    direccion:"",
    pais:""
  };

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        nombre: new FormControl(
          this.usuario.nombre
        ),
        correo: new FormControl(
          this.usuario.correo
        ),
        telefono: new FormControl(
          this.usuario.telefono
        ),
        direccion: new FormControl(
          this.usuario.direccion
        ),
        pais: new FormControl(
          this.usuario.pais
        )
      });
    
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

  //Invocacion de los metodos getter del formulario.
  get nombre() { return this.formulario.get('nombre')!;}
  get correo() { return this.formulario.get('correo')!;}
  get telefono() { return this.formulario.get('telefono')!;}
  get direccion() { return this.formulario.get('direccion')!;}
  get pais() { return this.formulario.get('pais')!;}

  Enviar()
  {
    alert(this.formulario.value.nombre);
  }

}
