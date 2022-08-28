import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../components/user-profile/user-profile';
import { UserDetailCard } from '../components/user-detail-card/user-detail-card';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, list } from '@angular/fire/storage';
import { response } from 'express';
import { UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  newUserProfile: UserProfile = new UserProfile;

  constructor(private http:HttpClient, private storage:Storage) { 
  }

  ngOnInit(){
    this.getImages();
  }
 
  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"

 
  uploadImages(pic:File, banner:File){
    const  stgPicRef = ref(this.storage, `images/pic`);  
    const stgBannerRef = ref(this.storage, `images/banner`)
   
    //Para verificar si el archivo recibido es una imagen. 
    var extension = /image-*/;

    //Comparo el tipo del archivo pasado como parámetro con el tipo de archivo que quiero.
    if(pic){
    uploadBytes(stgPicRef, pic);
    }
    if(banner){
    uploadBytes(stgBannerRef, banner);
    }
  }

  getImages(){
    var urls: String[] = [];
    const stgRef = ref(this.storage, `images`);
    
    listAll(stgRef)
    .then( async response =>{
      console.log(response);
      
      var i: number = 0;
      //Armo un array de strings con los url de cada imagen.
      for(let img of response.items){
        urls[i] = await getDownloadURL(img);
        i++;
      }
    
    })
    .catch(error =>{
      console.log(error);
    })
    return urls;
  }

  getProfileInfo(): Observable<any>{
    return this.http.get(this.apiUrl +"/home");
  }

  editProfile(userEdit: UserProfile): Observable<UserProfile>{
    return this.http.put<UserProfile>(this.apiUrl + "/edit/profile/update", userEdit);
    } 
  


  getCardInfo(): Observable<any>{
    return this.http.get(this.apiUrl + "/card/showall")
  }

  editCard(newCard:UserDetailCard): Observable<UserDetailCard>{
    return this.http.put<UserDetailCard>(this.apiUrl + "/card/edit/" + newCard.id, newCard);
  }

  
}
