import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies = [
    '../../assets/images/logo.png',
    '../../assets/images/logo.png',
    '../../assets/images/logo.png',
    '../../assets/images/logo.png',
    '../../assets/images/logo.png',
    '../../assets/images/logo.png',
    '../../assets/images/logo.png'
];
  constructor() { }

  ngOnInit() {
  }

}
