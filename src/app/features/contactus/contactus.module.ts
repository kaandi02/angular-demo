import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ContactusComponent } from './contactus.component';


const routes: Routes = [{ path: '', component: ContactusComponent }];

@NgModule({
  declarations: [ContactusComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  exports: [RouterModule],
})
export class ContactusModule {}
