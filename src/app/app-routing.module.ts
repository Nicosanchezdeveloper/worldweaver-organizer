import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './overview/overview.component';
import { ManageWorldsComponent } from './manage-worlds/manage-worlds.component';
import { ManageCharactersComponent } from './manage-characters/manage-characters.component';
import { ManageObjectsComponent } from './manage-objects/manage-objects.component';
import { ManageAbilitiesComponent } from './manage-abilities/manage-abilities.component';
import { CardComponent } from './card/card.component';

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
  },
  {
    path: 'manageworlds',
    component: ManageWorldsComponent
  },
  {
    path: 'managecharacters',
    component: ManageCharactersComponent
  },
  {
    path: 'manageobjects',
    component: ManageObjectsComponent
  },
  {
    path: 'manageabilities',
    component: ManageAbilitiesComponent
  },
  { path: 'manageworlds/:idCard', 
    component: ManageWorldsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
