import { Component, OnInit, ViewChild } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  constructor() { }

  ngOnInit(): void {
    console.log(this.miFormulario?.controls['nombre'].value);
  }
 
  
  guardar(){
    console.log('formulario posteado')
  }
}
