import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Form, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

import { ProfileService } from 'src/app/services/profile.service';
import { AboutCardService } from 'src/app/services/about-card.service';
import { ProjectCardService } from 'src/app/services/project-card.service';

import { UserProfile } from '../user-profile/user-profile';
import { UserDetailCard } from '../user-detail-card/user-detail-card';
import { createCard } from './createCard';
import { UserProjectCard } from '../user-detail-card/user-project-card';
import { SkillCircle } from '../skills/skillCircle';
import { SkillService } from 'src/app/services/skill.service';
import { createSkill } from './createSkill';
import { data } from 'jquery';



@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  pic!: File;
  banner!: File;


  subscription?: Subscription;
  newProfile: UserProfile;
  toEditCard: UserDetailCard;
  newCard: createCard;
  newSkillCircle: createSkill;

  previewProfileInfo: UserProfile;
  previewCardInfo: UserDetailCard[];
  previewProjectInfo: UserProjectCard[];
  previewSkillsInfo: SkillCircle[];

  editProfileForm: FormGroup;
  editSkillForm: FormGroup;
  editCardForm: FormGroup;
  editProjectForm: FormGroup;

  constructor(private skillCService: SkillService,
    private aboutCService: AboutCardService,
    private profileService: ProfileService,
    private projectCService: ProjectCardService,
    private formBuilder: FormBuilder,
    private storage: Storage) {

    this.previewProfileInfo = new UserProfile;
    this.previewCardInfo = [];
    this.previewProjectInfo = [];
    this.previewSkillsInfo = [];
    this.newProfile = new UserProfile;
    this.toEditCard = new UserDetailCard;
    this.newCard = new createCard;
    this.newSkillCircle = new createSkill


    this.editProfileForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      careerInfo: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      urls: this.formBuilder.array([])
    });

    this.editSkillForm = this.formBuilder.group({
      skill: new FormArray([])
    })


    this.editCardForm = this.formBuilder.group({
      card: new FormArray([])
    });

    this.editProjectForm = this.formBuilder.group({
      project: new FormArray([])
    });

  }

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(data => {
      this.previewProfileInfo = data;
      this.setProfileForms();
      this.setUrlForms();
    });
    this.getCards();
    this.getSkills();
    this.getProjects();
    this.activeTab();
  }

  //Perfil
  editProfile(newProfile: UserProfile): void {

    this.uploadImages();
    this.profileService.editProfile(newProfile).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  loadPic($event: any) {
    this.pic = $event.target.files[0];
  }

  loadBanner($event: any) {
    this.banner = $event.target.files[0];
  }

  uploadImages() {
    this.profileService.uploadImages(this.pic, this.banner);
  }

  get urls(): FormArray {
    return this.editProfileForm.controls["urls"] as FormArray;
  }

  setUrlForms(): void {
    this.previewProfileInfo.urls.forEach(url => {
      (<FormArray>this.editProfileForm.controls['urls']).push(
        new FormControl(url.url)
      )
    });
  }

  setProfileForms(): void {
    this.editProfileForm.setValue({
      userName: this.previewProfileInfo.userName,
      careerInfo: this.previewProfileInfo.careerInfo,
      email: this.previewProfileInfo.email,
      urls: []
    });
  }

  get profile(): UserProfile {
    return this.editProfileForm.value as UserProfile;
  }

  //Habilidades
  get skillForms(): FormArray {
    return this.editSkillForm.controls['skill'] as FormArray;
  }

  getSkills() {
    this.skillCService.getSkillCircles().subscribe({
      next: (data) => {
        for (let circle of data) {
          this.previewSkillsInfo.push(circle);
        }
        this.setSkillsForm();
      },

      error: (err) => {
        console.log(err);
      }
    })
  }

  setSkillsForm() {
    this.previewSkillsInfo.forEach(circle => {
      this.skillForms.push(new FormGroup({
        id: new FormControl(circle.id),
        percent: new FormControl(circle.percent),
        skill: new FormControl(circle.skill)
      }))
    })
  }

  createSkillCircle() {
    this.newSkillCircle = {
      'percent': 0,
      'skill': 'Nueva Habilidad'
    }
    this.skillCService.createSkillCircle(this.newSkillCircle).subscribe({
      next: (data) => {
        window.location.reload();
      },

      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteSkill(circleId: number) {
    this.skillCService.deleteSkillCircle(circleId).subscribe({
      next: (data) => {
        window.location.reload();
      },

      error: (err) => {
        console.log(err);
      }
    })
  }

  editSkill(newCircle: SkillCircle) {
    if (newCircle.skill.length <= 17) { 
      this.skillCService.editSkillCircle(newCircle).subscribe({
        next: (data) => {
          window.location.reload();
        },

        error: (err) => {
          console.log(err);
        }
      })
    } else {
      alert("La habilidad debe tener como máximo 17 caracteres.")
    }

  }

  //Sobre mí
  getCards() {
    this.aboutCService.getCardInfo().subscribe(data => {
      var i: number = 0;
      for (let card of data) {
        this.previewCardInfo[i] = data[i];
        i++;
      }
      this.setCardForms();

    })
  }

  setCardForms(): void {
    this.previewCardInfo.forEach(card => {
      this.cardForms.push(
        new FormGroup({
          id: new FormControl(card.id),
          title: new FormControl(card.title),
          body: new FormControl(card.body),
        })
      )
    })
  }

  get cardForms(): FormArray {
    return this.editCardForm.controls['card'] as FormArray;
  }

  createCard() {
    this.newCard = {
      'title': 'Nueva Tarjeta',
      'body': 'Introducir Contenido'
    };
    this.aboutCService.createCard(this.newCard).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteCard(toDeleteId: number) {
    this.aboutCService.deleteCard(toDeleteId).subscribe(data => {
      window.location.reload();
    })
  }

  editCard(newCard: UserDetailCard): void {
    this.aboutCService.editCard(newCard).subscribe({
      next: (c) => {
        window.location.reload();
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  //Proyectos
  getProjects() {
    this.projectCService.getProjectInfo().subscribe(data => {
      var i: number = 0;
      for (let card of data) {
        this.previewProjectInfo[i] = data[i];
        i++;
      }
      this.setProjectForms();
    })
  }

  setProjectForms(): void {
    this.previewProjectInfo.forEach(project => {
      this.projectForms.push(
        new FormGroup({
          id: new FormControl(project.id),
          title: new FormControl(project.title),
          body: new FormControl(project.body),
        })
      )
    })
  }

  get projectForms(): FormArray {
    return this.editProjectForm.controls['project'] as FormArray;
  }

  createProject() {
    this.newCard = {
      'title': 'Nueva Tarjeta',
      'body': 'Introducir Contenido'
    };
    this.projectCService.createProject(this.newCard).subscribe(data => {
      window.location.reload();
    })
  }

  deleteProject(id: number) {
    this.projectCService.deleteProject(id).subscribe(data => {
      window.location.reload();
    })
  }

  editProject(newCard: UserProjectCard): void {

    this.projectCService.editProject(newCard).subscribe({
      next: (c) => {
        window.location.reload();
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  //Guardar pestaña activa para restablecer al refrescar la página.
  activeTab() {
    $('a[data-bs-toggle="tab"]').on('show.bs.tab', function (e) {
      localStorage.setItem('activeTab', $(e.target).attr('data-bs-target')!);
    });
    var activeTab = localStorage.getItem('activeTab');

    if (activeTab) {
      ($('#nav-tab a[data-bs-target="' + activeTab + '"]') as any).addClass('show active');
      $(activeTab).addClass('show active')
    }
  }





}
