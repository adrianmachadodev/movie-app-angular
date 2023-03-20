import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from '../favorites/pages/favorites-page/favorites-page.component';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { MoviePageComponent } from '../movies/pages/movie-page/movie-page.component';
import { PremierePageComponent } from '../premiere/pages/premiere-page/premiere-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'premiere',
    component: PremierePageComponent,
    loadChildren: () =>
      import('../premiere/premiere.module').then((m) => m.PremiereModule),
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    loadChildren: () =>
      import('../premiere/premiere.module').then((m) => m.PremiereModule),
  },
  {
    path: 'movies/:id',
    component: MoviePageComponent,
    loadChildren: () =>
      import('../movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
