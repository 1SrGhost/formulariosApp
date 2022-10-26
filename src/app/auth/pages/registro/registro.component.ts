import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  //
  nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

/**
 * Si el valor del control es 'strider', devuelve un error. De lo contrario, devuelve nulo
 * @param {FormControl} control - FormControl: el control que se va a validar.
 * @returns nulo
 */
  noPuedeserStrider(control:FormControl){
    const valor:string = control.value?.trim().toLowerCase();
    if(valor === 'strider'){

      return{ noStrider:true}
      //return ERROR!
    }

    return null;

  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.nombrePattern)]],
    email: [, [Validators.required, Validators.pattern(this.emailPattern)]],
    username: [, [Validators.required,this.noPuedeserStrider]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Andres Perez',
      email: 'test@test.com',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}
