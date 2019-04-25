import { Component } from '@angular/core';
import { HacerService } from '../../services/hacer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];

  constructor(public hacerService: HacerService) {
    this.listas = this.hacerService.getLista();

  }

}
