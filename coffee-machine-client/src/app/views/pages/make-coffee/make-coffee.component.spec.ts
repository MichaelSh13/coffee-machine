import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCoffeeComponent } from './make-coffee.component';

describe('MakeCoffeeComponent', () => {
  let component: MakeCoffeeComponent;
  let fixture: ComponentFixture<MakeCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
