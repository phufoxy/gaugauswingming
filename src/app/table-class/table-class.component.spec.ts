import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClassComponent } from './table-class.component';

describe('TableClassComponent', () => {
  let component: TableClassComponent;
  let fixture: ComponentFixture<TableClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
