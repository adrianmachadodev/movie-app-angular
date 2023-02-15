import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/pages/main-page/main-page.component';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { FavoritesPageComponent } from './favorites/pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    HomePageComponent,
    FavoritesPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
