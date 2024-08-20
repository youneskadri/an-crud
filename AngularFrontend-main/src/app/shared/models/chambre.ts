import {TypeChambre} from "../enums/typechambre";
import {Bloc} from "../models/bloc";
export class Chambre {
    idChambre!:number ; 
    numeroChambre!:number;  
  
    typeC!:TypeChambre;
    bloc!:Bloc; 
    }