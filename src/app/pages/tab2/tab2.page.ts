import { Component } from '@angular/core';
import { HacerService } from '../../services/hacer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public hacerService: HacerService) {

  }

}
