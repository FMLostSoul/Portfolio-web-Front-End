import { Component, OnInit } from '@angular/core';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-socmedia',
  templateUrl: './user-socmedia.component.html',
  styleUrls: ['./user-socmedia.component.css']
})
export class UserSocmediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faSquareEnvelope = faSquareEnvelope;
}
