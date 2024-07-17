import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
