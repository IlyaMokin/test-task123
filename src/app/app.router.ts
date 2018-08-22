import { Routes } from '@angular/router';
import { UsersComponent } from './components/users.component'

export const appRoutes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: '**', redirectTo: 'users' },
];