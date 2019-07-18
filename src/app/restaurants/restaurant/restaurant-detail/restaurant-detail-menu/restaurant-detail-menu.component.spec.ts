import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailMenuComponent } from './restaurant-detail-menu.component';

describe('RestaurantDetailMenuComponent', () => {
  let component: RestaurantDetailMenuComponent;
  let fixture: ComponentFixture<RestaurantDetailMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
