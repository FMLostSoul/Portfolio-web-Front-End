import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { SkillCircle } from './skillCircle';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillCircles:SkillCircle[] = [];

  constructor(private skillCService: SkillService) { }

  ngOnInit(): void {
    this.skillCService.getSkillCircles().subscribe({
      next: (data) =>{
       for(let circle of data){
        this.skillCircles.push(circle);
       }
      }
    })
  }



}
