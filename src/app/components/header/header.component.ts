import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() btnClick = new EventEmitter()

  constructor() {
    
   }

  ngOnInit(): void {
  }
faArrowRightToBracket = faArrowRightToBracket;
faPenToSquare = faPenToSquare;
 

  

}