import { Injectable } from '@angular/core';
import { UserDetailCard } from '../components/user-detail-card/user-detail-card';
import { createCard } from '../components/edit-form/createCard';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutCardService {

  constructor(private http:HttpClient) {}
  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"
  
  getCardInfo(): Observable<any>{
    return this.http.get(this.apiUrl + "/card/showall");
  }

  createCard(newCard:createCard): Observable<any>{
    return this.http.post(this.apiUrl + "/card/create", newCard);
  }

  editCard(newCard:UserDetailCard): Observable<UserDetailCard>{
    return this.http.put<UserDetailCard>(this.apiUrl + "/card/edit/" + newCard.id, newCard);
  }

  deleteCard(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + "/card/delete/" + id);
  }

}
