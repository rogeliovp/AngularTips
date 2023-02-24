import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidaSelectDirectiveValidator } from '../../validaciones/valida-select.directive';
import swal from 'sweetalert2';
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
          this.usuario.nombre,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
        correo: new FormControl(
          this.usuario.correo,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
          ]
        ),
        telefono: new FormControl(
          this.usuario.telefono,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
        direccion: new FormControl(
          this.usuario.direccion,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
        pais: new FormControl(
          
        )
      }, {validators: ValidaSelectDirectiveValidator});
    
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
    let datos = 'nombre:' + this.formulario.value.nombre + ' email:' + this.formulario.value.correo + ' telefono:' + 
      this.formulario.value.telefono + ' direccion:' + this.formulario.value.direccion + ' pais:' + 
          this.formulario.value.pais;
    
    //ver todas las configuraciones de swal.fire
    swal.fire(
      {
        icon:'error',
        timer:5000,
        title: 'Ups..',
        text: datos
      }
    )
  }

}
