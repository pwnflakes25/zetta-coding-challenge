import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChallengeComponent } from './first-challenge/first-challenge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondChallengeComponent } from './second-challenge/second-challenge.component';
import { ThirdChallengeComponent } from './third-challenge/third-challenge.component';
import { FourthChallengeComponent } from './fourth-challenge/fourth-challenge.component';
import { MovieService } from './fourth-challenge/movie.service';
import { EditWatchListComponent } from './fourth-challenge/edit-watch-list/edit-watch-list.component';
import { HomepageComponent } from './home/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChallengeComponent,
    SecondChallengeComponent,
    ThirdChallengeComponent,
    FourthChallengeComponent,
    EditWatchListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
