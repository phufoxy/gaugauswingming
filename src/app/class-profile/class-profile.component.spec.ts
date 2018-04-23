import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProfileComponent } from './class-profile.component';

describe('ClassProfileComponent', () => {
  let component: ClassProfileComponent;
  let fixture: ComponentFixture<ClassProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
