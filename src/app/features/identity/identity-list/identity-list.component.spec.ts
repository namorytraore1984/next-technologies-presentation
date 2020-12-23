import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IdentityListComponent } from './identity-list.component';

describe('IdentityListComponent', () => {
  let component: IdentityListComponent;
  let fixture: ComponentFixture<IdentityListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
