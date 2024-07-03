import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../home/footer/footer.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { CheckoutComponent } from './checkout.component';


const routes: Routes = [{ path: '', component: CheckoutComponent }];

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class CheckoutModule {}
