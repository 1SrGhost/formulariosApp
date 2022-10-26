import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorsService } from '../../../shared/validator/email-validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        ,
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombrePattern),
        ],
      ],
      email: [
        ,
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        ,
        [Validators.required, this.validatorService.noPuedeserStrider],
      ],
      password: [, [Validators.required, Validators.minLength(6)]],
      password2: [, [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  
  get emailErrorMsg():string {
      const errors = this.miFormulario.get('email')?.errors;
      if(errors?.['required']){
        return 'Email es obligatorio';
      }
      else if(errors?.['pattern']){
        return 'el formato del correo es incorrecto';
      }
      else if(errors?.['emailTomado']){
        return 'ese email ya existe';
      }

      return '';
  }
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorsService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Andres Perez',
      email: 'test@test.com',
      username: '1SrGhost',
      password: '123456',
      password2: '123456',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  // emailRequired(){
  //   return (
  //     this.miFormulario.get('email')?.errors?.['required'] &&
  //     this.miFormulario.get('email')?.touched
  //   );

  // }
  // emailFormato(){
  //   return (
  //     this.miFormulario.get('email')?.errors?.['pattern'] &&
  //     this.miFormulario.get('email')?.touched
  //   );

  // }
  // emailTomado(){
  //   return (
  //     this.miFormulario.get('email')?.errors?.['emailTomado'] &&
  //     this.miFormulario.get('email')?.touched
  //   );

  // }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}
