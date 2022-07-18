import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { userDetailCard } from './user-detail-card';
import { CARDS } from './TEMP-user-detail-card';
@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.css']
})
export class UserDetailCardComponent implements OnInit {
@Input() userDetailCard:userDetailCard = CARDS[0]

  constructor() { }

  ngOnInit(): void {
  }

}
