import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'reset',
        component: ResetPasswordComponent
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
