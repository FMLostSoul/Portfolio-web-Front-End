import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createCard } from '../components/edit-form/createCard';
import { UserEducationCard } from '../components/user-detail-card/user-education-card';
import { UserProjectCard } from '../components/user-detail-card/user-project-card';

@Injectable({
  providedIn: 'root'
})
export class EducationCardService {


  constructor(private http: HttpClient) { }

  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"
  getEducationInfo(): Observable<any> {
    return this.http.get(this.apiUrl + "/education/showall");
  }

  createEducation(newEducation: createCard): Observable<any> {
    return this.http.post(this.apiUrl + "/education/create", newEducation);
  }

  editEducation(newEducation: UserEducationCard): Observable<UserEducationCard> {
    return this.http.put<UserEducationCard>(this.apiUrl + "/education/edit/" + newEducation.id, newEducation);
  }

  deleteEducation(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + "/education/delete/" + id);
  }
}
