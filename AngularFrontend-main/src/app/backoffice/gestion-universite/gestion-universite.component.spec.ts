import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUniversiteComponent } from './gestion-universite.component';

describe('GestionUniversiteComponent', () => {
  let component: GestionUniversiteComponent;
  let fixture: ComponentFixture<GestionUniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionUniversiteComponent]
    });
    fixture = TestBed.createComponent(GestionUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
