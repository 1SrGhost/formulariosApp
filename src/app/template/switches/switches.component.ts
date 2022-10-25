import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent{

  persona = {
    genero: 'M',
    notificaciones: true,

  }

  tYc:boolean = false;
}
