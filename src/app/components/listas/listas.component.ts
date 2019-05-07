import { Component, OnInit, Input } from '@angular/core';
import { HacerService } from '../../services/hacer.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input()terminada = true;

  constructor(public hacerService: HacerService, private router: Router) {
    this.listas = this.hacerService.getLista();

}

    listaSeleccionada(lista: Lista){
      if(this.terminada){
        this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
      }else{
        this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
      }
     }

     borrarLista(lista: Lista){
       this.hacerService.borrarLista(lista);
     }

     }
