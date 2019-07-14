import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailReviewComponent } from './restaurant-detail-review.component';

describe('RestaurantDetailReviewComponent', () => {
  let component: RestaurantDetailReviewComponent;
  let fixture: ComponentFixture<RestaurantDetailReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
