import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowseRoutes } from './browse.routes';
import { BrowseComponent } from './browse/browse.component';
import { MatModule } from '../mat-module/mat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowseRoutes,
    MatModule
  ],
  declarations: [
    BrowseComponent
  ],
  exports: [
    BrowseComponent
  ]
})
export class BrowseModule{}