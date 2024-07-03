import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../home/footer/footer.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { CartComponent } from './cart.component';

const routes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations:[CartComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartModule {}
