import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { injectComponentFactoryResolver } from '@angular/core/src/render3';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ( $event.nextState === false) {
      $event.preventDefault();
    }
  }

}
