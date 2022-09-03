import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestEnvComponent } from './components/test-env/test-env.component';

const routes: Routes = [
  {path:'home',component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'edit/profile', component:EditComponent},
  {path:'test', component:TestEnvComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
