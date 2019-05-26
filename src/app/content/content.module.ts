import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { ContentRoutingModule } from './content-routing.module';

// COMPONENTS
import { ContentComponent } from './content.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    ContentComponent,
    DetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
