import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class HacerService {

  listas: Lista[] = [];

  constructor() {

    const lista1 = new Lista('Cosas que hacer');
    const lista2 = new Lista('Tareas');

    this.listas.push(lista1, lista2);
    console.log(this.listas);
  }
  getLista():Lista[]{
    return this.listas;
  }

}
