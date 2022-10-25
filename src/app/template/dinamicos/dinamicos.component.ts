import { Component, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';

interface iPersona{
  nombre:string;
  favorito:iFavorito[];
}

interface iFavorito{
  id:number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  favorito:string = '';
  persona: iPersona = {
    nombre: 'Andres',
    favorito : [{
      id: 1, nombre: 'Metal Gear'
    },{
      id: 2, nombre: 'DeathStranding'
    },{
      id: 1, nombre: 'GeardSecond'
    }]
  }
  agregar(favorito: string){
  
    this.persona.favorito.push({id:this.persona.favorito.length+1,nombre:favorito})
  }
  eliminar(index:number){
    this.persona.favorito.splice(index,1);
  }
  
  guardar(){
    console.log('formulario posteado')
  }
}
