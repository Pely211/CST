import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { RpgGuardGuard } from './rpg-guard.guard';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path:'loginsucces',component: LoginsuccessComponent ,canActivate: [RpgGuardGuard] },
  { path:'registration', component: RegistrationComponent},
  { path:'**', component: MainPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
