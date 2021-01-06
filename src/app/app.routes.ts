import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent 
    },
    {
        path: 'quienes-somos', component: QuienesSomosComponent 
    },
    {
        path: 'servicios', component: ServiciosComponent
    },
    {
        path: 'contacto', component: ContactoComponent
    },
    {
        path: '', pathMatch:'full', redirectTo: 'home'
    },
    {
        path: '**', pathMatch:'full', redirectTo: 'home'
    },
];