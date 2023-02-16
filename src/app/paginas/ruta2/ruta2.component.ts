import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta2',
  templateUrl: './ruta2.component.html',
  styleUrls: ['./ruta2.component.css']
})
export class Ruta2Component implements OnInit {
  id:string;
  slug:string;
  page:1;
  size:10;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Curso Angular - Ruta 2");
    // let {id, slug} = this.route.snapshot.params;
    let params:any = this.route.snapshot.params;
    let queryParams:any = this.route.snapshot.queryParams;
    this.id = params.id;
    this.slug = params.slug;
    this.page= (queryParams.page) ? queryParams.page: 1;
    this.size= (queryParams.size) ? queryParams.size: 10;
    console.log('id=' + this.id + ' slug = ' + this.slug);
    console.log('page=' + this.page + ' size = ' + this.size);
  }

  public setTitle(titulo:string)
  {
    this.titleService.setTitle(titulo);
  }

}
