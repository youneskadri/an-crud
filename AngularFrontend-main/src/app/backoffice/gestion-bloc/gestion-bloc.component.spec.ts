import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBlocComponent } from './gestion-bloc.component';

describe('GestionBlocComponent', () => {
  let component: GestionBlocComponent;
  let fixture: ComponentFixture<GestionBlocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionBlocComponent]
    });
    fixture = TestBed.createComponent(GestionBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
