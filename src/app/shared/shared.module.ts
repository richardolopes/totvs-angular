import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    CommonModule
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
