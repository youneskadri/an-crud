import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChambrefrontComponent } from './gestion-chambrefront.component';

describe('GestionChambrefrontComponent', () => {
  let component: GestionChambrefrontComponent;
  let fixture: ComponentFixture<GestionChambrefrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionChambrefrontComponent]
    });
    fixture = TestBed.createComponent(GestionChambrefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
