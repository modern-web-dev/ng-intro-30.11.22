import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BASE_URL} from "./core/base-url.token";
import {environment} from "../environments/environment";
import {JwtTokenInterceptor} from "./core/jwt-token.interceptor";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    BrowserModule,
    SharedModule.forRoot(),
  ],
  providers:[
    {provide: BASE_URL, useValue: environment.BASE_API},
    {provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
