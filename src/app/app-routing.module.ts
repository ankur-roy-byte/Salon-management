import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { EmployeeComponent } from './home/details/details.component';
import { AddEmployeeComponent } from './home/add/add.component';
import { ViewEmployeeComponent } from './home/view/view.component';
import { EditEmployeeComponent } from './home/edit/edit.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PaymentComponent } from './payments/payment.component';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'addEmployee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'employees', component: ViewEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: EmployeeComponent, canActivate: [AuthGuard] },
    { path: 'editEmployee', component: EditEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard] },

    { path: 'pay', component: PaymentComponent, canActivate: [AuthGuard] },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
