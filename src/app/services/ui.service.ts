import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  public showLogin: boolean = false;
  public showEditForm: boolean = false;
  private subject = new Subject<any>();
  private subjectB = new Subject<any>();


  public toggleShowLogin(){
    this.showLogin = !this.showLogin 
    this.subject.next(this.showLogin);
  }
  public toggleShowEditForm(){
    this.showEditForm = !this.showEditForm 
    this.subjectB.next(this.showEditForm);
  }
 
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

  onToggleB():Observable<any>{
    return this.subjectB.asObservable();
  }
  constructor() { }
}
