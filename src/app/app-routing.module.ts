import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './modules/main/main.component';
import { CreateTeamComponent } from './modules/create-team/create-team.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'create-team',
    component: CreateTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
