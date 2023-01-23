import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { PremierePageComponent } from '../premiere/pages/premiere-page/premiere-page.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomePageComponent,
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Premiere',
    component: PremierePageComponent,
    loadChildren: () =>
      import('../premiere/premiere.module').then((m) => m.PremiereModule),
  },
  {
    path: '**',
    redirectTo: '/Home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
