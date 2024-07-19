import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ContactComponent,
    OverviewComponent,
    ManageWorldsComponent,
    ManageCharactersComponent,
    ManageObjectsComponent,
    ManageAbilitiesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
