import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { SortablejsModule } from 'ngx-sortablejs';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/Signup/signup.component';
import { BuildSetComponent } from './build-set/build-set.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { LeadSheetComponent } from './lead-sheet/lead-sheet.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollSongsComponent } from './scroll-songs/scroll-songs.component';
import { SetComponent } from './set/set.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SetContextMenuComponent } from './set-context-menu/set-context-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BuildSetComponent,
    EditSongComponent,
    LeadSheetComponent,
    ScrollSongsComponent,
    SetComponent,
    SetContextMenuComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SortablejsModule.forRoot({ animation: 150 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

