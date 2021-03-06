import { Component, OnInit, ContentChild, AfterContentInit, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  @ContentChild( FormControlName ) control: FormControlName;
  @Input() mensagem: any;

  input: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.control;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva FormControlName');
    }
  }

  valid() {
    return this.input.valid;
  }

  invalid() {
    return this.input.invalid;
  }

}
