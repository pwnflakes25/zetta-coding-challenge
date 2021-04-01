import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChallengeComponent } from './first-challenge/first-challenge.component';
import { SecondChallengeComponent } from './second-challenge/second-challenge.component';
import { ThirdChallengeComponent } from './third-challenge/third-challenge.component';

const routes: Routes = [
  {
    path: '',
    component: FirstChallengeComponent,
  },
  {
    path: 'second',
    component: SecondChallengeComponent,
  },
  {
    path: 'third',
    component: ThirdChallengeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
