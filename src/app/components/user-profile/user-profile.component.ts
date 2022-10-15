import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { UserProfile } from './user-profile';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) {
    this.pictures = [];
    this.userProfile = new UserProfile;
  }
  userProfile: UserProfile;


  pictures: String[];

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(data => {
      this.userProfile = data;
    })

//  this.placeholder();

    this.profileService.getImages();
    //Recibo el array de strings que contienen las url de las imágenes para luego mostrarlas.
    this.pictures = this.profileService.getImages();
  }
/* 
  placeholder(){
    let div1:null | HTMLElement = document.getElementById("userName");
    let div2:null | HTMLElement = document.getElementById("careerInfo");

    $(window).load('',function (){
    div1?.classList.remove("placeholder-glow");
    div2?.classList.remove("placeholder-glow");
  }
    )
}
*/

}



