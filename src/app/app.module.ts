import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// new component is imported 
import { NewCompComponent } from './new-comp/new-comp.component';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    // new componment is declared 
    NewCompComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
