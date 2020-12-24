import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedMainComponent } from './core/logged-main/logged-main.component';
import { LoginComponent } from './features/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'loggedpage', component: LoggedMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
