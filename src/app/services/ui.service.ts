import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
 
  constructor(private http:HttpClient) { 
  }

  ngOnInit(){

  }
 
  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"

 
  

 
}
