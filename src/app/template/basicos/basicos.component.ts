import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  constructor() {}

  ngOnInit(): void {}

/**
 * Si el control del producto no es válido y se ha tocado, devuelva verdadero
 * @returns devolver (
 *     this.miFormulario.controls['producto']?.invalid &&
 *     este.miFormulario.controla['producto']?.tocado
 *   );
 */
  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }
  guardar() {
    console.log('Guardar', this.miFormulario.value);
  }
}
