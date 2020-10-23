import { Component, Input, ViewChild,  } from '@angular/core';
import { HacerService } from '../../services/hacer.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  listas:Lista[];
  @ViewChild(IonList) lista: IonList;
  @Input()terminada = true;

  constructor(public hacerService: HacerService,
              private router: Router,
              private alertCtrl: AlertController)
  {
    this.listas = this.hacerService.getLista();
  }

  listaSeleccionada(lista:Lista)
  {
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrarLista(lista: Lista){
    this.hacerService.borrarLista(lista);
  }

  async editarLista(lista: Lista)
  {
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nuevo titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Modificar',
          handler: (data) => {
            if(data.titulo.length === 0){
              return;
            }
            lista.titulo = data.titulo;
            this.hacerService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
      alert.present();
  }
}
