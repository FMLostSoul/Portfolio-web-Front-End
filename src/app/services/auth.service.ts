import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../components/login-form/login';
import { newUser } from '../components/login-form/newUser';
import { jwtDTO } from '../components/login-form/jwtDTO';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://shielded-dusk-41330.herokuapp.com/auth"
  currentUserSubject: BehaviorSubject<any>;
  isAuthenticated = false;
  roles: String[] = [];

  constructor(private http: HttpClient) {
    console.log("El servicio de autenticacion está ejecutándose...");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  public createUser(credenciales: newUser): Observable<any> {
    return this.http.post(this.url + "create", credenciales);
  }

  public logIn(credenciales: Login): Observable<jwtDTO> {

    return this.http.post<jwtDTO>(this.url + "login", credenciales);

  }

  get userAuthenticated() {
    return this.currentUserSubject.value;
  }

}
