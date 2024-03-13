import { Routes } from '@angular/router';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductDetailsComponent } from './Component/productdetails/productdetails.component';
import { BlogComponent } from './Component/blog/blog.component';
import { AboutComponent } from './Component/about/about.component';
import { NotfoundComponent } from './Shared/Components/notfound/notfound.component';
import { LoginComponent } from './Component/login/login.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { userAuthGuard } from './Guard/user-auth.guard';
import { SignupComponent } from './Component/signup/signup.component';
import { CustomObservableComponent } from './Component/custom-observable/custom-observable.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProductListComponent, title: "Home" },
    { path: 'home/:id', component: ProductDetailsComponent, title: "Details" },
    { path: 'about', component: AboutComponent, title: "About us" },
    { path: 'blog', component: BlogComponent, title: "Blog", canActivate: [userAuthGuard] },
    { path: 'login', component: LoginComponent, title: "Log in" },
    { path: 'signup', component: SignupComponent, title: "Sign up" },
    { path: 'profile', component: ProfileComponent, title: "Profile", canActivate: [userAuthGuard] },



    { path: '**', component: NotfoundComponent, title: "page not found" }

];
