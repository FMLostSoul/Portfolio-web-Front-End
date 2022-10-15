import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isAuthenticated = true;
    }
  }
 
  logOut(): void {
    this.tokenService.logOut();
  }





}