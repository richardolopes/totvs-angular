import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.form.group({
      address: this.form.control('', [
        Validators.minLength(5),
        Validators.required
      ]),
      number: this.form.control('', [
        Validators.minLength(1),
        Validators.required
      ]),
      complement: this.form.control('', [
        Validators.minLength(3),
        Validators.required
      ])
    });

    console.log(this.orderForm);
  }

  send() {
    console.log(this.orderForm);
  }

}
