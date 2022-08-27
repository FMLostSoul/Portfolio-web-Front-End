import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { UserProfile } from './user-profile';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private uiService: UiService) {
    this.images=[];
  }

userProfile!:UserProfile;
images:String[];

  ngOnInit(): void{
    this.uiService.getProfileInfo().subscribe(data=>{
      this.userProfile = data;
    })
    
    this.uiService.getImages();
    //Recibo el array de strings que contienen las url de las imágenes para luego mostrarlas.
    this.images = this.uiService.getImages();
    
    
  }
  

  
}
