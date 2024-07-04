import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../features/navbar/navbar.component';
import { FooterComponent } from '../features/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule,RouterModule,FormsModule],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
