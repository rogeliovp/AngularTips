import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-material-expansion',
  templateUrl: './material-expansion.component.html',
  styleUrls: ['./material-expansion.component.css']
})
export class MaterialExpansionComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  constructor() { }

  ngOnInit(): void {
  }

}
