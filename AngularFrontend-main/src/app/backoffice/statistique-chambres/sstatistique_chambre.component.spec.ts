import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueChambreComponent } from './statistique_chambre.component';

describe('StatistiqueComponent', () => {
  let component: StatistiqueChambreComponent;
  let fixture: ComponentFixture<StatistiqueChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueChambreComponent]
    });
    fixture = TestBed.createComponent(StatistiqueChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
