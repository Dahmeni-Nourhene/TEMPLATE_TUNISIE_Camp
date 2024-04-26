export interface Utilisateur {
  id: number;
  // Add other user properties if needed
}

export interface Lieux {
  id: number;
  nom:string;
  // Add other location properties if needed
}

export interface Reservation {
  idRes?: number;
  dateArrivee: Date; // Utiliser le type Date
  dateDepart: Date; // Utiliser le type Date
  nbPersonnes: number;
  montant: number;
  utilisateur?: Utilisateur;
  lieux?: Lieux;
}
