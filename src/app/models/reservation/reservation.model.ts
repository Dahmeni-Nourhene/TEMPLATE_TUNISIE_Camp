export interface Reservation {
  idRes: number;
  dateArrivee: string; // Assuming date will be in ISO 8601 format (e.g., "2022-04-15")
  dateDepart: string; // Assuming date will be in ISO 8601 format (e.g., "2022-04-15")
  nbPersonnes: number;
  montant: number;
  utilisateur: Utilisateur;
  lieux: Lieux;
}

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  // Ajouter d'autres propriétés si nécessaire
}

export interface Lieux {
  id: number;
  nom: string;
  // Ajouter d'autres propriétés si nécessaire
}
