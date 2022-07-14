import { Component, OnInit } from '@angular/core';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
faArrowRightToBracket = faArrowRightToBracket;
}
