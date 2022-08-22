import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../components/user-profile/user-profile';
import { UserDetailCard } from '../components/user-detail-card/user-detail-card';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  



  newUserProfile!: UserProfile

  constructor(private http:HttpClient) { }
 
  getProfileInfo(): Observable<any>{
    return this.http.get("http://localhost:8080/home");
  }

  editProfile(userEdit: UserProfile): Observable<UserProfile>{
    return this.http.put<UserProfile>("http://localhost:8080/edit/profile/update", userEdit);
    } 
  


  getCardInfo(): Observable<any>{
    return this.http.get("http://localhost:8080/card/showall")
  }

  editCard(newCard:UserDetailCard): Observable<UserDetailCard>{
    return this.http.put<UserDetailCard>("http://localhost:8080/card/edit/" + newCard.id, newCard);
  }

  
}
