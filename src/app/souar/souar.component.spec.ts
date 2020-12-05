import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouarComponent } from './souar.component';

describe('SouarComponent', () => {
  let component: SouarComponent;
  let fixture: ComponentFixture<SouarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
