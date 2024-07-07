import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [{ path: '', component: CheckoutComponent }];

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatFormFieldModule,
    MatError,
    MatLabel,
    MatInputModule
  ],
  exports: [RouterModule],
})
export class CheckoutModule {}
