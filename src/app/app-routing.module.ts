import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'Login',
    loadChildren: () =>
      import(`./login/login.module`).then((m) => m.LoginModule),
  },
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () => import(`./main/main.module`).then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
