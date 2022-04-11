import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListHomeComponent } from './product-list-home.component';

describe('ProductListHomeComponent', () => {
  let component: ProductListHomeComponent;
  let fixture: ComponentFixture<ProductListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
