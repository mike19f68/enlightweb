import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { LoginComponent } from './login/login.component';
import { BuildSetComponent } from './build-set/build-set.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { LeadSheetComponent } from './lead-sheet/lead-sheet.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollSongsComponent } from './scroll-songs/scroll-songs.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SetComponent } from './set/set.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuildSetComponent,
    EditSongComponent,
    LeadSheetComponent,
    ScrollSongsComponent,
    LyricsComponent,
    SetComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

