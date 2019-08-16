import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  function MockComponent(options: Component): Component {
    const metadata: Component = {
      selector: options.selector,
      template: options.template || '',
      inputs: options.inputs,
      outputs: options.outputs
    };

    class Mock {}

    return Component(metadata)(Mock as any);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ OrderComponent, MockComponent({selector: 'app-input'}) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('total(): deveretornar o total do carrinho', () => {
    spyOn(component.itemsCart, 'total').and.returnValue(10);

    const retornoTotal = component.total();

    expect(retornoTotal).toEqual(10);
  })
});
