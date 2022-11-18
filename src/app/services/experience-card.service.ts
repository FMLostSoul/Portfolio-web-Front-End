import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createCard } from '../components/edit-form/createCard';
import { UserExperienceCard } from '../components/user-detail-card/user-experience-card';

@Injectable({
  providedIn: 'root'
})
export class ExperienceCardService {

  constructor(private http: HttpClient) { }

  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"
  getExperienceInfo(): Observable<any> {
    return this.http.get(this.apiUrl + "/experience/showall");
  }

  createExperience(newExperience: createCard): Observable<any> {
    return this.http.post(this.apiUrl + "/experience/create", newExperience);
  }

  editExperience(newExperience: UserExperienceCard): Observable<UserExperienceCard> {
    return this.http.put<UserExperienceCard>(this.apiUrl + "/experience/edit/" + newExperience.id, newExperience);
  }

  deleteExperience(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + "/experience/delete/" + id);
  }
}
