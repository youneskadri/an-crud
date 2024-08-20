import { TypeDemande } from "../enums/typedemande";
import { Statut } from "../enums/Statut";
export class Demande {
    id!: number;
    dateDemande!: Date;
    typeDemande!: TypeDemande;
    statut!: Statut;
    userId!: number;
}