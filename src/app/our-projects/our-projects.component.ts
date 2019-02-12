import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss']
})
export class OurProjectsComponent implements OnInit {
  hideOurProjects: boolean = true;
  @ViewChild('owlElement') owlElement: OwlCarousel;
  images = [
      '../../assets/content-images/project1.png',
      '../../assets/content-images/project2.png',
      '../../assets/content-images/project3.png',
      '../../assets/content-images/project4.png',
      '../../assets/content-images/project1.png',
      '../../assets/content-images/project2.png',
      '../../assets/content-images/project3.png',
      '../../assets/content-images/project4.png'
  ];
  constructor() { }

  ngOnInit() {
    this.owlElement.next([200]);
  }

}
