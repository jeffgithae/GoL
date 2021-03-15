import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewSigninTuLearnComponent } from './new-signin-tu-learn/new-signin-tu-learn.component';

//import components


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  
  { path: 'login', 
  component: LoginComponent,
  data: {
    title: 'login'
  }
},
{ path: 'home', 
component: HomeComponent,
data: {
  title: 'home'
}
},
{ path: 'about', 
component: AboutComponent,
data: {
  title: 'about'
}
},
{ path: 'new_signin', 
component: NewSigninTuLearnComponent,
data: {
  title: 'new_signin'
}
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }