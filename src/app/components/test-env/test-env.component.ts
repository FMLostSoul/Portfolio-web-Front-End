import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-env',
  templateUrl: './test-env.component.html',
  styleUrls: ['./test-env.component.css']
})
export class TestEnvComponent implements OnInit {
  cards: number = 2;
  constructor() { }

  ngOnInit(): void {
  }
  createCard(): void{
    this.cards = this.cards+1;
    console.log(this.cards);
  }


}
