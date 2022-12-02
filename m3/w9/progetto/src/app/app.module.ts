import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './components/post-non-attivi/post-non-attivi.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { MarkerDirective } from './directive/marker.directive';
import { UserComponent } from './components/user/user.component';
import { DettagliUserComponent } from './components/dettagli-user/dettagli-user.component';
import { DettagliCardComponent } from './components/dettagli-card/dettagli-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    PostAttiviComponent,
    PostNonAttiviComponent,
    PostCardComponent,
    MaiuscoloPipe,
    MarkerDirective,
    UserComponent,
    DettagliUserComponent,
    DettagliCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
