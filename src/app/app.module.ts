import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookModule} from './book/book.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {enableTracing:true}),
    CoreModule,
    BrowserModule,
    SharedModule.forRoot(),
    BookModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
