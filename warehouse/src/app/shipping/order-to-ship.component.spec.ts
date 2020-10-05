import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderToShipComponent } from './order-to-ship.component';

describe('OrderToShipComponent', () => {
  let component: OrderToShipComponent;
  let fixture: ComponentFixture<OrderToShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderToShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderToShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
