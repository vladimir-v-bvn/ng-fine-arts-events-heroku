import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './common/auth/signup/signup.component';
import { LoginComponent } from './common/auth/login/login.component';
import { AddYourEventComponent } from './modules/add-your-event/add-your-event.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addyourevent', component: AddYourEventComponent},
//{path: 'addyourevent', component: AddYourEventComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
