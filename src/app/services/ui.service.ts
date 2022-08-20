import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  

  public showEditForm: boolean = false;
  private subjectB = new Subject<any>();
 
  constructor(private http:HttpClient) { }
 
  getProfileInfo(): Observable<any>{
    return this.http.get("http://localhost:8080/home");
  }

  getCardInfo(): Observable<any>{
    return this.http.get("http://localhost:8080/card/showall")
  }

  public toggleShowEditForm(){
    this.showEditForm = !this.showEditForm 
    this.subjectB.next(this.showEditForm);
  }

  onToggleB():Observable<any>{
    return this.subjectB.asObservable();
  }
  
}
