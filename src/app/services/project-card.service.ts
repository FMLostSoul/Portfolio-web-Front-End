import { Injectable } from '@angular/core';
import { UserProjectCard } from '../components/user-detail-card/user-project-card';
import { createCard } from '../components/edit-form/createCard';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {

  constructor(private http: HttpClient) { }

  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"
  getProjectInfo(): Observable<any> {
    return this.http.get(this.apiUrl + "/project/showall");
  }

  createProject(newProject: createCard): Observable<any> {
    return this.http.post(this.apiUrl + "/project/create", newProject);
  }

  editProject(newProject: UserProjectCard): Observable<UserProjectCard> {
    return this.http.put<UserProjectCard>(this.apiUrl + "/project/edit/" + newProject.id, newProject);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + "/project/delete/" + id);
  }

}
