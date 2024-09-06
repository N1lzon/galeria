import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'gallery',
        loadComponent:() => import('./pages/gallery/gallery.component'),
        pathMatch: 'full'
       
    },
    {
        path:'',
        redirectTo:'gallery',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo:'gallery',
        pathMatch: 'full'
    }
];


