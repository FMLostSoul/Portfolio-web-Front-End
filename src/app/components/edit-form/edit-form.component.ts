import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { UserProfile } from '../user-profile/user-profile';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailCard } from '../user-detail-card/user-detail-card';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {


  subscription?:Subscription; 
  newProfile!:UserProfile;
  newCard!:UserDetailCard;
  pic!:File;
  banner!:File;
  
  previewPInfo!:UserProfile;
  previewC1Info!:UserDetailCard;
  previewC2Info!:UserDetailCard;
  previewC3Info!:UserDetailCard;
  previewC4Info!:UserDetailCard;


  editProfileForm!: FormGroup;
  //TODO: Reconstruir FormGroups como 1 solo (ver TODO en edit-form.html)
  editCardForm!: FormGroup;

  editProjectForm!: FormGroup;

  constructor(private UiService: UiService, private formBuilder:FormBuilder, private storage:Storage) {

   
    this.editProfileForm = this.formBuilder.group(

      {
        userName:['',[Validators.required]],
        careerInfo:['',[Validators.required]],
        email:['',[Validators.email, Validators.required]]

      }
    )

    this.editCardForm = this.formBuilder.group({

      id:['',[]],
      title:['',[]],
      body:['',[]],
     

    })



    this.editProjectForm = this.formBuilder.group({

      titleP1:['',[]],
      bodyC1:['',[]],
      titleP2:['',[]],
      bodyC2:['',[]],
      titleP3:['',[]],
      bodyC3:['',[]],
      titleP4:['',[]],
      bodyP4:['',[]]

    })

  }
   
  ngOnInit(): void {
    this.UiService.getProfileInfo().subscribe(data=>{
      this.previewPInfo = data;
    });

    this.UiService.getCardInfo().subscribe(data=>{
      this.previewC1Info = data[0];
      this.previewC2Info = data[1];
      this.previewC3Info = data[2];
      this.previewC4Info = data[3];
      
    })

  }

  editProfile(newProfile:UserProfile): void{

    this.uploadImages();
    this.UiService.editProfile(newProfile).subscribe(profile =>{
      this.editProfileForm.setValue({
        'userName': newProfile.userName,
        'careerInfo': newProfile.careerInfo,
        'email': newProfile.email

    })
    })

  }

    editCard(newCard:UserDetailCard):void{
      
      this.UiService.editCard(newCard).subscribe(c =>{
        this.editCardForm.setValue({
          'id': newCard.id,
          'title': newCard.title,
          'body': newCard.body
        })
        this.editCardForm.reset();
      })
      
    }

    loadPic($event: any){
      this.pic = $event.target.files[0];
      console.log(this.pic);
    }

    loadBanner($event: any){
      this.banner = $event.target.files[0];
    }

    uploadImages(){
      this.UiService.uploadImages(this.pic, this.banner);
    }


}

// TODO: Aplicar este método luego de reorganizar a las tarjetas como un Array de registros.
//  editCards(newCards:Array<UserDetailCard>): void{
//   
//  newCards.forEach(card => {
//    this.UiService.editCard(card).subscribe(c =>{
//
//      this.editCardsForm.setValue({
//        'title': card.title,
//        'body': card.body
//      })
//      console.log(card);
//    })
//   });
//
//
// }
