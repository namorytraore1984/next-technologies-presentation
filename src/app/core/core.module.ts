import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarreSuppComponent } from './barre-supp/barre-supp.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [BarreSuppComponent, LogoComponent],
  imports: [
    CommonModule
  ],
  exports: [BarreSuppComponent, LogoComponent]
})
export class CoreModule { }
