import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  showEditForm: boolean = false;
  subscription?:Subscription; 
  faRectangleXMark = faRectangleXmark;
  constructor(private UiService: UiService) {
    this.subscription = this.UiService.onToggleB().subscribe(value => this.showEditForm = value)
   }

  ngOnInit(): void {
  }

  toggleShowEditForm(){
    this.UiService.toggleShowEditForm();
  }
}
