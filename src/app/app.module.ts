import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChallengeComponent } from './first-challenge/first-challenge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondChallengeComponent } from './second-challenge/second-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChallengeComponent,
    SecondChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
