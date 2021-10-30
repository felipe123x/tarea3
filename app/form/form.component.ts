import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario:FormGroup;


  constructor(public FormB:FormBuilder) {
    this.formulario=this.FormB.group({
      nombre: ["", [Validators.required,Validators.maxLength(20)]],
      telefono: ["",Validators.required],
      correo: ["",Validators.required],
      dirigido: ["",Validators.required],
      mensaje: ["",Validators.required]
    })
   }

  ngOnInit(): void {
  }

  validaciones(){
    console.log(this.formulario.get("nombre")?.value);
  }

}
