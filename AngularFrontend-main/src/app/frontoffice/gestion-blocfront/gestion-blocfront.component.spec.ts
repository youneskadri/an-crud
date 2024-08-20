import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBlocfrontComponent } from './gestion-blocfront.component';

describe('GestionBlocfrontComponent', () => {
  let component: GestionBlocfrontComponent;
  let fixture: ComponentFixture<GestionBlocfrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionBlocfrontComponent]
    });
    fixture = TestBed.createComponent(GestionBlocfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
