import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: OrderComponent}
];

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
