import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../classes/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  url="http://localhost:8080/evenements";
  // injecter le service HttpClient
    constructor(private http:HttpClient) { }
    getAllEvenements(){
      return this.http.get(this.url);
    }
    getEvenementById(id:number)
    {
      return this.http.get(this.url+"/"+id);
    }
    createOneEvenement(evenement:Evenement)
    {
      return this.http.post(this.url,evenement);
    }
    updateOneEvenement(evenement:Evenement,id:number)
    {
      return this.http.put(this.url+"/"+id,evenement);
    }
    deleteOneEvenement(id:number)
    {
      return this.http.delete(this.url+"/"+id);
    }
}
