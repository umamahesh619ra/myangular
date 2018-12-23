import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
{path: '', component: NavComponent},
{path: 'home', component: HomeComponent},
{path: 'contact', component: ContactComponent},
{path: 'about', component: AboutComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
