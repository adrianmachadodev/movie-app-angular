import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { MainPageComponent } from './main/pages/main-page/main-page.component';
import { PremierePageComponent } from './premiere/pages/premiere-page/premiere-page.component';
import { PremiereModule } from './premiere/premiere.module';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'premiere',
    component: PremierePageComponent,
    loadChildren: () =>
      import('./premiere/premiere.module').then((m) => PremiereModule),
  },
  {
    path: 'Login',
    component: LoginPageComponent,
    loadChildren: () => import('./login/login.module').then((m) => LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
