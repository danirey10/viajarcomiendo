import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      { path: 'login', component: LoginPageComponent,
        canActivate:[isNotAuthenticatedGuard]
       },
      { path: 'register', component: RegisterPageComponent },
      {
        path:'panel',
        component:UserPageComponent,
        canActivate:[isAuthenticatedGuard]
      },
      { path: '**', redirectTo:'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
