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
    return this.http.get("https://shielded-dusk-41330.herokuapp.com/home");
  }

  editProfile(userEdit: UserProfile): Observable<UserProfile>{
    return this.http.put<UserProfile>("https://shielded-dusk-41330.herokuapp.com/edit/profile/update", userEdit);
    } 
  


  getCardInfo(): Observable<any>{
    return this.http.get("https://shielded-dusk-41330.herokuapp.com/card/showall")
  }

  editCard(newCard:UserDetailCard): Observable<UserDetailCard>{
    return this.http.put<UserDetailCard>("https://shielded-dusk-41330.herokuapp.com/card/edit/" + newCard.id, newCard);
  }

  
}
