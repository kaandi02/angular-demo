import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../home/footer/footer.component';
import { NavbarComponent } from '../home/navbar/navbar.component';

import { SingleproductComponent } from './singleproduct.component';

const routes: Routes = [{ path: '', component: SingleproductComponent }];

@NgModule({
  declarations: [SingleproductComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class SingleProductModule {}
