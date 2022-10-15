import { Component, OnInit } from '@angular/core';
import { faSquareEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { UserProfile } from '../user-profile/user-profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-socmedia',
  templateUrl: './user-socmedia.component.html',
  styleUrls: ['./user-socmedia.component.css']
})
export class UserSocmediaComponent implements OnInit {

  constructor(private profileService: ProfileService) {
    this.userProfile = new UserProfile;
  }

  userProfile: UserProfile;

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(data => {
      this.userProfile = data;
    })
  }
  faSquareEnvelope = faSquareEnvelope;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
