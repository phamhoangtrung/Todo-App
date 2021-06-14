import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoxItemComponent } from './dash-box-item.component';

describe('DashBoxItemComponent', () => {
  let component: DashBoxItemComponent;
  let fixture: ComponentFixture<DashBoxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
