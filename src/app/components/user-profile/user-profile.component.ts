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
  }
userProfile!:UserProfile;
  
  ngOnInit(): void{
    this.uiService.getProfileInfo().subscribe(data=>{
      console.log(data);
      this.userProfile = data;
    })
  }
  

  
}
