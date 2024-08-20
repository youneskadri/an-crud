import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/shared/services/demandeService/demande-service.service';
import { Demande } from 'src/app/shared/models/demande';
import { Router } from '@angular/router';
import { TypeDemande } from 'src/app/shared/enums/typedemande'; 
import { Statut } from 'src/app/shared/enums/Statut'; 

@Component({
  selector: 'app-gestion-demande',
  templateUrl: './gestion-demande.component.html',
  styleUrls: ['./gestion-demande.component.scss']
})
export class GestionDemandeComponent implements OnInit {
  demandes: Demande[] = [];
  selectedDemande?: Demande;
  newDemande: Demande = new Demande();
  editDemandeId?: number;
  idToDelete?: number;
  message: string = '';

  demandeTypes = Object.values(TypeDemande);
  statutTypes = Object.values(Statut);

  constructor(
    private demandeService: DemandeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDemandes();
  }

  loadDemandes() {
    this.demandeService.getDemandes().subscribe({
      next: (data) => this.demandes = data,
      error: (err) => {
        console.error('Failed to fetch demandes', err);
        this.message = 'Failed to fetch demandes. Please try again later.';
      }
    });
  }

  viewDemande(id: number) {
    this.demandeService.getDemandeById(id).subscribe({
      next: (data) => this.selectedDemande = data,
      error: (err) => {
        console.error('Failed to fetch demande', err);
        this.message = 'Failed to fetch demande. Please try again later.';
      }
    });
  }

  createDemande() {
    this.demandeService.saveDemande(this.newDemande)
      .subscribe({
        next: (data) => {
          this.demandes.push(data);
          this.newDemande = new Demande();
          this.message = 'Demande created successfully';
        },
        error: (err) => {
          console.error('Failed to save demande', err);
          this.message = 'Failed to create demande. Please try again later.';
        }
      });
  }

  updateDemande() {
    if (this.editDemandeId) {
      this.demandeService.updateDemande(this.editDemandeId, this.newDemande)
        .subscribe({
          next: (data) => {
            const index = this.demandes.findIndex(d => d.id === this.editDemandeId);
            if (index > -1) {
              this.demandes[index] = data;
              this.newDemande = new Demande();
              this.editDemandeId = undefined;
              this.message = 'Demande updated successfully';
            }
          },
          error: (err) => {
            console.error('Failed to update demande', err);
            this.message = 'Failed to update demande. Please try again later.';
          }
        });
    }
  }

  deleteDemande() {
    if (this.idToDelete) {
      this.demandeService.deleteDemande(this.idToDelete)
        .subscribe({
          next: () => {
            this.demandes = this.demandes.filter(d => d.id !== this.idToDelete);
            this.idToDelete = undefined;
            this.message = 'Demande deleted successfully';
          },
          error: (err) => {
            console.error('Failed to delete demande', err);
            this.message = 'Failed to delete demande. Please try again later.';
          }
        });
    }
  }

  prepareNewDemande() {
    this.newDemande = new Demande();
    this.editDemandeId = undefined;
  }

  editDemande(demande: Demande) {
    this.newDemande = { ...demande };
    this.editDemandeId = demande.id;
  }

  confirmDelete(id: number) {
    this.idToDelete = id;
  }

  getDemandeType(type: string): string {
    return TypeDemande[type as keyof typeof TypeDemande] || type;
  }

  getStatut(statut: string): string {
    return Statut[statut as keyof typeof Statut] || statut;
  }
}
