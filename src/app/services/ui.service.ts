import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  public showLogin: boolean = false;
  private subject = new Subject<any>();

  public toggleShowLogin(){
    this.showLogin = !this.showLogin 
    this.subject.next(this.showLogin);
  }
 
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
  constructor() { }
}
