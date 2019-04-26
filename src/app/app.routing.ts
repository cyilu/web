import {Routes, RouterModule} from '@angular/router';
import {AnalysisComponent} from './module/view.analysis';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'content',
    component: AnalysisComponent
  },
  // {
  //   path: '**',
  //   component: LoginComponent
  // },
  {
    path:'register',
    component: RegisterComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
