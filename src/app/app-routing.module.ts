import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChallengeComponent } from './first-challenge/first-challenge.component';

const routes: Routes = [
  {
    path: '',
    component: FirstChallengeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
