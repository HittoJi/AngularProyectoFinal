import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSarchBarComponent } from './products-sarch-bar.component';

describe('ProductsSarchBarComponent', () => {
  let component: ProductsSarchBarComponent;
  let fixture: ComponentFixture<ProductsSarchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSarchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSarchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
