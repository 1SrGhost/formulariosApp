import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    tYc: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /* Restableciendo el formulario con los valores del objeto `persona` y configurando `tYc` a `true`. */
    this.miFormulario.reset({ ...this.persona, tYc: true });

    // this.miFormulario.valueChanges.subscribe((form) => {
    //   delete form.tYc;
    //   this.persona = form;
    // });

/* Desestructurando el valor del formulario y asignando el resto de valores al objeto `persona`. */
    this.miFormulario.valueChanges.subscribe(({tYc, ...rest})=> {
      this.persona = rest;
    })
  }

/**
 * Toma el valor del formulario, lo copia en un nuevo objeto, elimina la propiedad tYc de ese objeto y
 * luego asigna el resultado a la propiedad persona.
 */
  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.tYc;
    this.persona = formValue;
  }
}
