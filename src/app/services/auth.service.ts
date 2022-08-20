import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="localhost:8080/login/auth"
  currentUserSubject:BehaviorSubject<any>;
  
  constructor(private http:HttpClient) {
    console.log("El servicio de autenticacion está ejecutándose...");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
   }

   IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
   }

   get UsuarioAutenticado(){
    return this.currentUserSubject.value;
   }

}
