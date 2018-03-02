import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FilmListComponent} from './filmlist/film-list.component';
import {WelcomeComponent} from './home/welcome.component';
import { FilmDetailComponent } from './filmlist/film-detail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BuyticketsComponent } from './buytickets/buytickets.component';
import { LoginformComponent } from './loginform/loginform.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FilmListComponent,
    FilmDetailComponent,
    AboutusComponent,
    ContactusComponent,
    BuyticketsComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent},
      {path: 'about', component: AboutusComponent},
      {path: 'contact', component: ContactusComponent},
      {path: 'films', component: FilmListComponent},
      {path: 'films/:id', component: FilmDetailComponent},
      {path: 'buy', component: BuyticketsComponent},
      {path: 'login', component: LoginformComponent},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
