import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../util/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: BodyComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
