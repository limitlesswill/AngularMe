import { Routes } from '@angular/router';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductDetailsComponent } from './Component/productdetails/productdetails.component';
import { BlogComponent } from './Component/blog/blog.component';
import { AboutComponent } from './Component/about/about.component';
import { NotfoundComponent } from './Shared/Components/notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProductListComponent, title: "Home" },
    { path: 'home/:id', component: ProductDetailsComponent, title: "Details" },
    { path: 'about', component: AboutComponent, title: "About us" },
    { path: 'blog', component: BlogComponent, title: "Blog" },
    { path: '**', component: NotfoundComponent, title: "page not found" }

];
