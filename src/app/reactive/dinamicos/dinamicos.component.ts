import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [['Metal Gear'], ['Death Stranding']],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  /**
   * Devuelve el FormArray denominado 'favoritos' del FormGroup denominado 'miFormulario'
   * @returns El objeto FormArray
   */
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  validarCampo(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    // this.favoritosArr.push(
    //   new FormControl(this.nuevoFavorito.value, Validators.required)

    // );

    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );

    this.nuevoFavorito.reset();
  }

/**
 * Estamos usando el método removeAt() para eliminar el índice del favorito que queremos eliminar
 * @param {number} index - número: el índice del elemento que se va a eliminar.
 */
  borrarFavorito(index: number) {
    console.log(index);
    this.favoritosArr.removeAt(index);
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
  }
}
