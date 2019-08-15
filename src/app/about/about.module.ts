import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutGuardService } from '../guardian/about-guard.service';

const routes: Routes = [
  {path: '', component: AboutComponent, canActivate: [AboutGuardService]}
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
