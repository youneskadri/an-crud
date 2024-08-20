import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbackComponent } from './navbarback.component';

describe('NavbarbackComponent', () => {
  let component: NavbarbackComponent;
  let fixture: ComponentFixture<NavbarbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarbackComponent]
    });
    fixture = TestBed.createComponent(NavbarbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
