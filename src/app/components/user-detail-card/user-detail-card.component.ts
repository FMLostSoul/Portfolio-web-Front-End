import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UserDetailCard } from './user-detail-card';
import { AboutCardService } from 'src/app/services/about-card.service';
import { UserProjectCard } from './user-project-card';
import { ProjectCardService } from 'src/app/services/project-card.service';
@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.css']
})
export class UserDetailCardComponent implements OnInit {

  constructor(private aboutCService: AboutCardService, private projectCService: ProjectCardService) {
    this.cardsLeft = [];
    this.cardsRight = [];
    this.projectsLeft = [];
    this.projectsRight = [];

  }

  cardsLeft: UserDetailCard[];
  cardsRight: UserDetailCard[];
  projectsLeft: UserProjectCard[];
  projectsRight: UserProjectCard[];


  ngOnInit(): void {
    this.aboutCService.getCardInfo().subscribe(data => {
      var i: number = 0;
      var r: number = 0;
      var l: number = 0;
      for (let card of data) {
        if (i % 2 == 0) {
          this.cardsLeft[l] = data[i];
          l++;
        } else {
          this.cardsRight[r] = data[i];
          r++;
        }
        i++;
      }

    })

    this.projectCService.getProjectInfo().subscribe(data => {
      var i: number = 0;
      var r: number = 0;
      var l: number = 0;
      for (let card of data) {
        if (i % 2 == 0) {
          this.projectsLeft[l] = data[i];
          l++;
        } else {
          this.projectsRight[r] = data[i];
          r++;
        }
        i++;
      }

    })
  }


}
