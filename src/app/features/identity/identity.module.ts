import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityFormComponent } from './identity-form/identity-form.component';
import { IdentityListComponent } from './identity-list/identity-list.component';
import { IdentityComponent } from './identity/identity.component';
import { IdentityPageComponent } from './identity-page/identity-page.component';



@NgModule({
  declarations: [IdentityFormComponent, IdentityListComponent, IdentityComponent, IdentityPageComponent],
  imports: [
    CommonModule
  ]
})
export class IdentityModule { }
