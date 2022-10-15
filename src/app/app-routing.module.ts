import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestEnvComponent } from './components/test-env/test-env.component';
import { UserDetailCard } from './components/user-detail-card/user-detail-card';
import { UserDetailCardComponent } from './components/user-detail-card/user-detail-card.component';
import { Guard } from './services/guard.guard';

const routes: Routes = [
  {path:'home',component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'edit/profile', component:EditComponent, canActivate: [Guard], data: {expectedRole: ['admin']}},
  {path:'test', component:TestEnvComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
