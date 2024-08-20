import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFoyerComponent } from './gestion-foyer.component';

describe('GestionFoyerComponent', () => {
  let component: GestionFoyerComponent;
  let fixture: ComponentFixture<GestionFoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionFoyerComponent]
    });
    fixture = TestBed.createComponent(GestionFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
