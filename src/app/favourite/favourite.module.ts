import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FavouriteComponent } from './favourite.component';

const routes: Routes = [{ path: '', component: FavouriteComponent }];

@NgModule({
  declarations: [FavouriteComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  exports: [RouterModule],
})
export class FavouriteModule {}
