import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StyleDirective} from './directives/style.directive';
import { IfnotdirectiveDirective } from './directives/ifnotdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotdirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
