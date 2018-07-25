import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrazyPipe } from './pipes/crazy.pipe';
import { StudentCardComponent } from './components/student-card/student-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CrazyPipe,
    StudentCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
