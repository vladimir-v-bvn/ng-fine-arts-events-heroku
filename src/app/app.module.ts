import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './common/header/header.component';
import { PreloaderComponent } from './modules/preloader/preloader.component';
import { MainScreenVideoComponent } from './modules/main-screen-video/main-screen-video.component';
import { MainScreenParallaxComponent } from './modules/main-screen-parallax/main-screen-parallax.component';
import { MainScreenControlsComponent } from './modules/main-screen-controls/main-screen-controls.component';
import { MainScreenMainEventComponent } from './modules/main-screen-main-event/main-screen-main-event.component';
import { MainScreenComponent } from './modules/main-screen/main-screen.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopEventsComponent } from './modules/top-events/top-events.component';
import { YourEventsComponent } from './modules/your-events/your-events.component';
import { SignupComponent } from './common/auth/signup/signup.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './common/auth/login/login.component';
import { AddYourEventComponent } from './modules/add-your-event/add-your-event.component';
import { httpClientInterceptor } from './http-client-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreloaderComponent,
    HeaderComponent,
    MainScreenVideoComponent,
    MainScreenParallaxComponent,
    MainScreenControlsComponent,
    MainScreenMainEventComponent,
    MainScreenComponent,
    FooterComponent,
    TopEventsComponent,
    YourEventsComponent,
    SignupComponent,
    LoginComponent,
    AddYourEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpClientInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
