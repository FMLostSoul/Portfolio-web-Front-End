import { Component, OnInit } from '@angular/core';
import {} from 'jquery'
@Component({
  selector: 'app-test-env',
  templateUrl: './test-env.component.html',
  styleUrls: ['./test-env.component.css']
})
export class TestEnvComponent implements OnInit {
  cards: number = 2;
  constructor() { }

  ngOnInit(): void {
    this.remain();
  }
  createCard(): void{
    this.cards = this.cards+1;
    console.log(this.cards);
  }

  remain(){
    $('button[data-bs-toggle="tab"]').on('show.bs.tab', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('data-bs-target')!);
    });
    var activeTab = localStorage.getItem('activeTab');
    alert(activeTab);
    if (activeTab) {
      ($('#nav-tab button[data-bs-target="'+activeTab+'"]')as any).addClass('show active');
      $(activeTab).addClass('show active')
    }
  }

}
