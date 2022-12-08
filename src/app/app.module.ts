import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/pages/main-page/main-page.component';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
