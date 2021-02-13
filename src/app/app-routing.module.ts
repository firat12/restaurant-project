import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestoListComponent} from './resto-list/resto-list.component';
import {RestoAddComponent} from './resto-add/resto-add.component';
import { RestoUpdateComponent } from './resto-update/resto-update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'add',
    component: RestoAddComponent
  },
  {
    path: 'update/:id',
    component: RestoUpdateComponent
  },
  {
    path: 'list',
    component: RestoListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

RegisterComponent
