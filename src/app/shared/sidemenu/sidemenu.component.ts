import { Component, OnInit } from '@angular/core';
interface IMenuItem{
  text:string;
  ruta:string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

templateMenu: IMenuItem[] = [{
  text: 'Basicos',
  ruta: './template/basicos'
},
{
  text: 'Dinamicos',
  ruta: './template/dinamicos'
},
{
  text: 'switches',
  ruta: './template/switches'
}]

reactiveMenu: IMenuItem[] = [{
  text: 'Basicos',
  ruta: './reactive/basicos'
},
{
  text: 'Dinamicos',
  ruta: './reactive/dinamicos'
},
{
  text: 'switches',
  ruta: './reactive/switches'
}]
}
