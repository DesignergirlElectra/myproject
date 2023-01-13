import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskformComponent } from './add-taskform.component';

describe('AddTaskformComponent', () => {
  let component: AddTaskformComponent;
  let fixture: ComponentFixture<AddTaskformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
