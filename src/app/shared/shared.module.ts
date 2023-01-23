import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [NavbarComponent, ContentSectionComponent, SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, ContentSectionComponent, SideBarComponent],
})
export class SharedModule {}
