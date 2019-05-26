import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { HomeRoutingModule } from './home-routing.module';

// COMPONENTS
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
