import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarreSuppComponent } from './barre-supp/barre-supp.component';
import { LogoComponent } from './logo/logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoggedMainComponent } from './logged-main/logged-main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BarreSuppComponent, LogoComponent, NavBarComponent, LoggedMainComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BarreSuppComponent, LogoComponent, NavBarComponent, LoggedMainComponent]
})
export class CoreModule { }
