import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from '../home/footer/footer.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';

const routes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations:[CartComponent],
  imports: [RouterModule.forChild(routes),SharedModule,CommonModule],
  exports: [RouterModule],
})
export class CartModule {}
