import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

import { ProfileService } from 'src/app/services/profile.service';
import { AboutCardService } from 'src/app/services/about-card.service';
import { ProjectCardService } from 'src/app/services/project-card.service';

import { UserProfile } from '../user-profile/user-profile';
import { UserDetailCard } from '../user-detail-card/user-detail-card';
import { createCard } from './createCard';
import { UserProjectCard } from '../user-detail-card/user-project-card';



@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  response:string = "";
  pic!:File;
  banner!:File;
  
  subscription?:Subscription; 
  newProfile:UserProfile;
  toEditCard:UserDetailCard;
  newCard:createCard;
  
  previewProfileInfo:UserProfile;
  previewCardInfo:UserDetailCard[];
  previewProjectInfo:UserProjectCard[];

  editProfileForm:FormGroup;
  editCardForm:FormGroup;


  constructor(private aboutCService: AboutCardService, private profileService:ProfileService, private projectCService:ProjectCardService, private formBuilder:FormBuilder, private storage:Storage) {

    this.previewProfileInfo = new UserProfile;
    this.previewCardInfo = [];
    this.previewProjectInfo = [];
    this.newProfile = new UserProfile;
    this.toEditCard = new UserDetailCard;
    this.newCard = new createCard;


    this.editProfileForm = this.formBuilder.group({
        userName:['',[Validators.required]],
        careerInfo:['',[Validators.required]],
        email:['',[Validators.email, Validators.required]]
      }
    )

    this.editCardForm = this.formBuilder.group({
      id:['',[]],
      title:['',[Validators.required]],
      body:['',[Validators.required]],
    })

  }
   
  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(data=>{
      this.previewProfileInfo = data;
    });
    this.getCards();
    this.getProjects();
    this.activeTab();
  }
  //Perfil
  editProfile(newProfile:UserProfile): void{

    this.uploadImages();
    this.profileService.editProfile(newProfile).subscribe(profile =>{
      this.editProfileForm.setValue({
        'userName': newProfile.userName,
        'careerInfo': newProfile.careerInfo,
        'email': newProfile.email
    })
    })

  }

  loadPic($event: any){
    this.pic = $event.target.files[0];
  }

  loadBanner($event: any){
    this.banner = $event.target.files[0];
  }

  uploadImages(){
    this.profileService.uploadImages(this.pic, this.banner);
  }

  //Sobre mí
  getCards(){
    this.aboutCService.getCardInfo().subscribe(data=>{
      var i: number = 0;
      for(let card of data){
        this.previewCardInfo[i] = data[i];
        i++;
      }

    })
  }

  createCard(){
    this.newCard = {
      'title': 'Nueva Tarjeta',
      'body': 'Introducir Contenido'
    }; 
    this.aboutCService.createCard(this.newCard).subscribe(data => {
      window.location.reload();
    })
    
    
    
  }

  deleteCard(toDeleteId:number){
    this.aboutCService.deleteCard(toDeleteId).subscribe(data => {
      window.location.reload();
    })
  }

  editCard(newCard:UserDetailCard):void{
    
    this.aboutCService.editCard(newCard).subscribe(c =>{
      this.editCardForm.setValue({
        'id': newCard.id,
        'title': newCard.title,
        'body': newCard.body
      })
      this.editCardForm.reset();
      window.location.reload();
    })
    
  }
  //Proyectos
  getProjects(){
    this.projectCService.getProjectInfo().subscribe(data => {
      var i: number = 0;
      for(let card of data){
        this.previewProjectInfo[i] = data[i];
        i++;
      }

    })
  }

  createProject(){
    this.newCard = {
      'title': 'Nueva Tarjeta',
      'body': 'Introducir Contenido'
    }; 
    this.projectCService.createProject(this.newCard).subscribe(data =>{
      window.location.reload();
    })
  }

  deleteProject(id:number){
    this.projectCService.deleteProject(id).subscribe(data =>{
      window.location.reload();
    })
  }
 
  editProject(newCard:UserProjectCard):void{
    
    this.projectCService.editProject(newCard).subscribe(c =>{
      this.editCardForm.setValue({
        'id': newCard.id,
        'title': newCard.title,
        'body': newCard.body
      })
      this.editCardForm.reset();
      window.location.reload();
    })
    
  }
  //Guardar pestaña activa para restablecer al refrescar la página.
  activeTab(){
    $('a[data-bs-toggle="tab"]').on('show.bs.tab', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('data-bs-target')!);
    });
    var activeTab = localStorage.getItem('activeTab');

    if (activeTab) {
      ($('#nav-tab a[data-bs-target="'+activeTab+'"]')as any).addClass('show active');
      $(activeTab).addClass('show active')
    }
  }
    
}
