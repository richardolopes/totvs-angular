import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';
import { OrderFinishComponent } from './order-finish/order-finish.component';

const routes: Routes = [
  {path: '', component: OrderComponent},
  {path: 'finish/:id', component: OrderFinishComponent}
];

@NgModule({
  declarations: [OrderComponent, OrderFinishComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
