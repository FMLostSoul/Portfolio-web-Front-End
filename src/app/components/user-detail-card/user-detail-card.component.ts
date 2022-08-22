import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UserDetailCard } from './user-detail-card';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.css']
})
export class UserDetailCardComponent implements OnInit {

  card1!:UserDetailCard;
  card2!:UserDetailCard;
  card3!:UserDetailCard;
  card4!:UserDetailCard;
  
  constructor(private uiService: UiService) { }

  
  ngOnInit(): void {
    this.uiService.getCardInfo().subscribe(data=>{
      console.log(data);
      this.card1 = data[0];
      this.card2 = data[1];
      this.card3 = data[2];
      this.card4 = data[3];
    })
  }

}
