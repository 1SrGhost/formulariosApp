import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor() {}

  /**
   * Si el valor del control es 'strider', devuelve un error. De lo contrario, devuelve nulo
   * @param {FormControl} control - FormControl: el control que se va a validar.
   * @returns nulo
   */
  noPuedeserStrider(control: FormControl): ValidationErrors | null{
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return { noStrider: true };
      //return ERROR!
    }

    return null;
  }
}
