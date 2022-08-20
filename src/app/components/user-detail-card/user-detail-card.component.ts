import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UserDetailCard } from './user-detail-card';

@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.css']
})
export class UserDetailCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
