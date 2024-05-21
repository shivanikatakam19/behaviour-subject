import { Route } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Route[] = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user/:id',
        component: UserComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];