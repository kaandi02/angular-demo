import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../home/footer/footer.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FavouriteComponent } from './favourite.component';


const routes: Routes = [{ path: '', component: FavouriteComponent }];

@NgModule({
  declarations:[FavouriteComponent],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class FavouriteModule {}
