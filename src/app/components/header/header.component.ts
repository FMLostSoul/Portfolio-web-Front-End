import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() btnClick = new EventEmitter()

  constructor(private UiService: UiService) {
    
   }

  ngOnInit(): void {
  }
faArrowRightToBracket = faArrowRightToBracket;
faPenToSquare = faPenToSquare;
 

  

}