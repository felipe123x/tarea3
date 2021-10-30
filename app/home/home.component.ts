import { Component, OnInit } from '@angular/core';
import { Noticias,ListaNoticias,ListaNoticias1 } from '../interfaces/noticias';
import { Categorias, ListaCategorias } from '../interfaces/categorias';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fotoGrande=[
    {"ruta":"1.png"}
  ];

  ListaNoticias=ListaNoticias;
  ListaNoticias1=ListaNoticias1;
  id:number=0;
  Noticia:any

  constructor(private ruta:ActivatedRoute) { }




  ngOnInit(): void {}

  AbrirNoticia(id:number){
    console.log("noticia"+id);
  }

}


