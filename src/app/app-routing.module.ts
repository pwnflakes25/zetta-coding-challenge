import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChallengeComponent } from './first-challenge/first-challenge.component';
import { FourthChallengeComponent } from './fourth-challenge/fourth-challenge.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SecondChallengeComponent } from './second-challenge/second-challenge.component';
import { ThirdChallengeComponent } from './third-challenge/third-challenge.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'first',
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
  {
    path: 'fourth',
    component: FourthChallengeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
