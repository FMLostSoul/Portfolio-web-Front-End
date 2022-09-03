import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSocmediaComponent } from './components/user-socmedia/user-socmedia.component';
import { UserDetailCardComponent } from './components/user-detail-card/user-detail-card.component';
import { LoginComponent } from './components/login/login.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UiService } from './services/ui.service';
import { InterceptorService } from './services/interceptor.service';
import { EditComponent } from './components/edit/edit.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { TestEnvComponent } from './components/test-env/test-env.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    UserSocmediaComponent,
    UserDetailCardComponent,
    LoginComponent,
    EditFormComponent,
    PortfolioComponent,
    LoginFormComponent,
    EditComponent,
    TestEnvComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
   
  ],
  providers: [UiService,{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
