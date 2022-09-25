import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { UserProfile } from '../components/user-profile/user-profile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private storage: Storage) {
  }

  ngOnInit() {
    this.getImages();
  }

  apiUrl: String = "https://shielded-dusk-41330.herokuapp.com"

  uploadImages(pic: File, banner: File) {
    const stgPicRef = ref(this.storage, `images/pic`);
    const stgBannerRef = ref(this.storage, `images/banner`)

    //Para verificar si el archivo recibido es una imagen. 
    var extension = /image-*/;

    //Comparo el tipo del archivo pasado como parámetro con el tipo de archivo que quiero.
    if (pic) {
      uploadBytes(stgPicRef, pic);
    }
    if (banner) {
      uploadBytes(stgBannerRef, banner);
    }
  }

  getImages() {
    var urls: String[] = [];
    const stgRef = ref(this.storage, `images`);

    listAll(stgRef)
      .then(async response => {

        var i: number = 0;
        //Armo un array de strings con los url de cada imagen.
        for (let img of response.items) {
          urls[i] = await getDownloadURL(img);
          i++;
        }

      })
      .catch(error => {
        console.log(error);
      })
    return urls;
  }

  getProfileInfo(): Observable<any> {
    return this.http.get(this.apiUrl + "/home");
  }

  editProfile(userEdit: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(this.apiUrl + "/edit/profile/update", userEdit);
  }


}
