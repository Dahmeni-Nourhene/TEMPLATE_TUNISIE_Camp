import { CentreCamping } from "../centre-camping/centre-camping.model";

 
export interface Lieux {
   idLieux: number;
   nom: string;
   description: string;
   capacite: string;
   tarifNuit: string;
   centreCamping: CentreCamping;  
   activites: string;    

}

