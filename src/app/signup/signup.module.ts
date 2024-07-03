import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [{ path: '', component: SignupComponent }];

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class SignupModule {}
