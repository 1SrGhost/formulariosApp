import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[false,Validators.required],
    tYc:[false,Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.miFormulario.reset({...this.persona, tYc:true});
  }


}
