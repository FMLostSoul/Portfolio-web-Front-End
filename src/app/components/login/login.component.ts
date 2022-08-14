import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin: boolean = false;
  subscription?:Subscription;
  faRectangleXMark = faRectangleXmark;  
  toggleShowLogin(){
    this.UiService.toggleShowLogin();
  }

  constructor(private UiService: UiService) { 
    this.subscription = this.UiService.onToggle().subscribe(value => this.showLogin = value)
  }

  ngOnInit(): void {
  }

}
