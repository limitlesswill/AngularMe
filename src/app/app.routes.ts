import { Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProductListComponent, title: "Home" },
    { path: 'about', component: AboutComponent, title: "About us" },
    { path: '**', component: NotfoundComponent, title: "page not found" }

];
