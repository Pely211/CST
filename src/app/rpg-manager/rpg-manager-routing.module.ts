import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemManagerComponent } from '../item-manager/item-manager.component';
import { LoginComponent } from '../login/login.component';
import { LoginsuccessComponent } from '../loginsuccess/loginsuccess.component';
import { MainPageComponent } from '../main-page/main-page.component';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path:'loginsucces',component: LoginsuccessComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpgManagerRoutingModule { }
