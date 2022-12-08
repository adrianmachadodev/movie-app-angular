import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ContentSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ContentSectionComponent
  ]
})
export class SharedModule { }
