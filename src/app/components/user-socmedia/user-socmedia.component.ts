import { Component, OnInit } from '@angular/core';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserProfile } from '../user-profile/user-profile';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-user-socmedia',
  templateUrl: './user-socmedia.component.html',
  styleUrls: ['./user-socmedia.component.css']
})
export class UserSocmediaComponent implements OnInit {

  constructor(private uiService: UiService) { }
  userProfile!:UserProfile;

  ngOnInit(): void {
    this.uiService.getProfileInfo().subscribe(data=>{
      console.log(data);
      this.userProfile = data;
  })
}
  faSquareEnvelope = faSquareEnvelope;

}
