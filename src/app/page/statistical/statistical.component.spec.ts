import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalComponent } from './statistical.component';

describe('StatisticalComponent', () => {
  let component: StatisticalComponent;
  let fixture: ComponentFixture<StatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
