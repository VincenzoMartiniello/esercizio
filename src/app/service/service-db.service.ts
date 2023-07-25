import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,Subject,of} from 'rxjs';
import { Utente } from '../model/utente';

@Injectable({
  providedIn: 'root',
})

export class ServiceDbService {
  private dataUrl = 'http://localhost:3000/listUtenti';  // URL to web api

  public form$:Subject<Utente> = new Subject();
  //private data$=this.subject.asObservable();
  public form1$:Subject<Utente> = new Subject();

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //  Metodo per la gestione degli errori
  private handleError<T>( result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //Metodo richiamato dal form component che assegna l'utente del form al subject
  // search(utente:Utente){
  //   this.subject.next(utente);
  // }

  //Metodo che ritorna il form riempito alla tabella
  // getUtente3(): Observable<Utente>{
  //   return this.data$;
  // }
getUtenti(): Observable<Utente[]> {return this.http.get<Utente[]>(this.dataUrl);}

/** DELETE: delete the utent from the server */
deleteUtente(id: number): Observable<Utente> {
  const url = `${this.dataUrl}/${id}`;
  return this.http.delete<Utente>(url, this.httpOptions)
    }
/** POST: add a new utent to the server */
addUtente(utente:Utente): Observable<Utente>{
  return this.http.post<Utente>(this.dataUrl, utente, this.httpOptions)
}

 /** PUT: update the utente on the server */
updateUtente(utente: Utente,id:number): Observable<any> {
  const url = `${this.dataUrl}/${id}`;
  return this.http.put(url, utente, this.httpOptions);
}
/** GET utente by id */
getUtente(id: number): Observable<Utente> {
  const url = `${this.dataUrl}/${id}`;
  return this.http.get<Utente>(url);
}
// GET utenti by string
getUtentiFiltrato(data: any): Observable<Utente[]> {
  const url = `${this.dataUrl}`;
  let queryParams=new HttpParams();
  //  if(data.nome !=""){
  //     queryParams=queryParams.append("nome",data.nome)
  //  }
  //  if(data.cognome !=""){
  //     queryParams=queryParams.append("cognome",data.cognome)
  //  }
  //  if(data.sesso !=""){
  //     queryParams=queryParams.append("sesso",data.sesso)
  //  }
  //  if(data.nazionalita !=""){
  //     queryParams=queryParams.append("nazionalita",data.nazionalita)
  //  }
  //  if(data.indirizzo!=""){
  //     queryParams=queryParams.append("indirizzo",data.indirizzo)
  //  }
  //  if(data.numero_di_telefono!=""){
  //     queryParams=queryParams.append("numero_di_telefono",data.numero_di_telefono)
  //  }
  //  if(data.data_di_nascita!=null){
  //     queryParams=queryParams.append("data_di_nascita",data.data_di_nascita)
  //  }
  //  if(data.sposato!=""){
  //     queryParams=queryParams.append("sposato",data.sposato)
  //  }
   for (var k in data){
     if(data[k] !="" && data[k] !=null){
      queryParams=queryParams.append(k,data[k])
     }
   }
   return this.http.get<Utente[]>(url,{params:queryParams});
}
}
