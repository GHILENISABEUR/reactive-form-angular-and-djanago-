import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './helpers/help/help.component';
import { ModelComponent } from './models/model/model.component';
import { ServiceComponent } from './services/service/service.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    ModelComponent,
    ServiceComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
