import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BatmanComponent } from './batman/batman.component';
// import { SupermanComponent } from './superman/superman.component';
// import { SpiderManComponent } from './spider-man/spider-man.component';
// import { ThorComponent } from './thor/thor.component';
import { MainComponent } from './main/main.component';
import { DcModule } from './Dc/dc.module';
import { MarvelModule } from './marvel/marvel.module';

@NgModule({
  declarations: [
    AppComponent,
    // BatmanComponent,
    // SupermanComponent,
    // SpiderManComponent,
    // ThorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DcModule,
    MarvelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
