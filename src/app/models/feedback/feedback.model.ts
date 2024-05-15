export interface Feedback {
  idFeedback: number;
  commentaire: string;
  dateFeedback: string; // Assuming date will be in ISO 8601 format (e.g., "2022-04-15")
  note: number;
  idUtilisateur:number;
}