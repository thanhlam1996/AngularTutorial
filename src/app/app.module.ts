import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {Wordcomponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserEventComponent } from './user-event/user-event.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';

@NgModule({
  declarations: [
    Wordcomponent,
    AppComponent,
    BookComponent,
    UserEventComponent,
    StructComponent,
    WordsComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

