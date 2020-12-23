import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarreSuppComponent } from './barre-supp.component';

describe('BarreSuppComponent', () => {
  let component: BarreSuppComponent;
  let fixture: ComponentFixture<BarreSuppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreSuppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
