

export class Utente {
  id:number
  nome:string;
  cognome:string;
  sesso:string;
  data_di_nascita:Date;
  nazionalita:string;
  sposato:string;
  numero_di_telefono:number;
  indirizzo:string;
  constructor(id:number,nome:string,cognome:string,sesso:string,data_di_nascita:Date,nazionalita:string,sposato:string,numero_di_telefono:number,indirizzo:string){
    this.id=id;
    this.nome=nome;
    this.cognome=cognome;
    this.sesso=sesso;
    this.data_di_nascita=data_di_nascita;
    this.nazionalita=nazionalita;
    this.sposato=sposato;
    this.numero_di_telefono=numero_di_telefono;
    this.indirizzo=indirizzo;
  }
}
