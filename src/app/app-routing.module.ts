import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '**', // default (if the requested URL doesn't match any path)
    redirectTo: 'home',
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
