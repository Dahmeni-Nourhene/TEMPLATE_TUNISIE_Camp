import { Lieux } from "../reservation/reservation.model";

export interface CentreCamping {
  idCentre: number;
  lieuxs: Lieux[];
  adresse: string;
  nom: string;
  description:string;
}

