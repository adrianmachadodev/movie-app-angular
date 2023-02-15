import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SectionContentComponent } from './components/section-content/section-content.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FavoritesMoviesListComponent } from './components/favorites-movies-list/favorites-movies-list.component';
import { CardsRatedComponent } from './components/cards-rated/cards-rated.component';
import { SectionRatedComponent } from './components/section-rated/section-rated.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SideBarComponent,
    SectionContentComponent,
    CardsComponent,
    CarouselComponent,
    FavoritesMoviesListComponent,
    CardsRatedComponent,
    SectionRatedComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    NavbarComponent,
    SideBarComponent,
    SectionContentComponent,
    CardsComponent,
    CarouselComponent,
    FavoritesMoviesListComponent,
    CardsRatedComponent,
    SectionRatedComponent,
  ],
})
export class SharedModule {}
