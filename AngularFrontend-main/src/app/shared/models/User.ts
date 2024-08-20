import {Roles} from "../enums/role";
import { Demande } from "./demande";

export class User{
  id!:number;
  firstname!:string;
  lastname!:string;
  email!:string;
  cin!:number;
  ecole!:string;
  dateNaissance!:Date;
  password!:string;
  role!:Roles;
  code!:string;
  demandes?: Demande[];
}
