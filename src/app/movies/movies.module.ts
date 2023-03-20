import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
