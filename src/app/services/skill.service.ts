import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createSkill } from '../components/edit-form/createSkill';
import { SkillCircle } from '../components/skills/skillCircle';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"

  getSkillCircles(): Observable<any>{
    return this.http.get(this.apiUrl + "/skill/showall");
  }

  createSkillCircle(circle: createSkill): Observable<any>{
    return this.http.post(this.apiUrl + "/skill/create", circle);
  }

  deleteSkillCircle(circleId: number):Observable<any>{
    return this.http.delete(this.apiUrl + "/skill/delete/" + circleId);
  }

  editSkillCircle(newCircle: SkillCircle): Observable<any> {
    return this.http.put<SkillCircle>(this.apiUrl + "/skill/edit/" + newCircle.id, newCircle);
  }


}
