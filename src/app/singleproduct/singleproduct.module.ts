import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { SingleproductComponent } from './singleproduct.component';

const routes: Routes = [{ path: '', component: SingleproductComponent }];

@NgModule({
  declarations: [SingleproductComponent],
  imports: [RouterModule.forChild(routes), CommonModule,SharedModule,FormsModule],
  exports: [RouterModule],
})
export class SingleProductModule {}
