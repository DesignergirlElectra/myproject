import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployfedtempformComponent } from './employfedtempform.component';

describe('EmployfedtempformComponent', () => {
  let component: EmployfedtempformComponent;
  let fixture: ComponentFixture<EmployfedtempformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployfedtempformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployfedtempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
