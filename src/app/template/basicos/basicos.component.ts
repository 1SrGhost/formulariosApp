import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  /* Inicializando el formulario. */
  initForm = {
    producto: '',
    precio:0,
    existencias:0
  }
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

  /**
   * Si el formulario existe, y el control existe, y el control ha sido tocado, y el valor del control
   * es menor que cero, entonces devuelve verdadero
   * @returns un valor booleano.
   */
  cantidadValida(): boolean {
    return (
      this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.value < 0
    );
  }
  /**
   * La función guardar() es un método de la clase FormularioComponent. Es un método público y se llama
   * cuando el usuario hace clic en el botón. La función se define como una función que no devuelve
   * nada. La función tiene un parámetro, que es el formulario que se envía. La función registra el
   * formulario en la consola.
   */
  guardar() {
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }
}
