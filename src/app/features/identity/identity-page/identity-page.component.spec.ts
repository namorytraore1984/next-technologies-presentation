import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IdentityPageComponent } from './identity-page.component';

describe('IdentityPageComponent', () => {
  let component: IdentityPageComponent;
  let fixture: ComponentFixture<IdentityPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
