import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-env',
  templateUrl: './test-env.component.html',
  styleUrls: ['./test-env.component.css']
})
export class TestEnvComponent implements OnInit {
 percent:number = 50;
 title:string = "Java"
  constructor() { }

  ngOnInit(): void {

  }
 

}
