import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptService } from './intercept.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    InterceptService,
  
  ]
})
export class IntercepetModule { }
