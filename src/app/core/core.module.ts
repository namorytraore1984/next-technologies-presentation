import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarreSuppComponent } from './barre-supp/barre-supp.component';
import { LogoComponent } from './logo/logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [BarreSuppComponent, LogoComponent, NavBarComponent],
  imports: [
    CommonModule
  ],
  exports: [BarreSuppComponent, LogoComponent, NavBarComponent]
})
export class CoreModule { }
