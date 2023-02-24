import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild("myModalConf", {static: false}) myModalConf: TemplateRef<any>;
  modalTitle:string;
  usuario:any;
  paises:Array<any>;

  constructor(private modalService: NgbModal) 
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

  abrir()
  {
    this.modalService.open(this.myModalConf, {size: 'lg'});
    this.modalTitle = "Ejemplo de ventana modal desde Angular";
  }

  enviar()
  {
    console.log(this.usuario.nombre + " " + this.usuario.correo + " " + this.usuario.telefono);
  }

}
