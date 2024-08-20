import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChambreComponent } from './gestion-chambre.component';

describe('GestionChambreComponent', () => {
  let component: GestionChambreComponent;
  let fixture: ComponentFixture<GestionChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionChambreComponent]
    });
    fixture = TestBed.createComponent(GestionChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
