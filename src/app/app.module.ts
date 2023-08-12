import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Angular Material
import { MaterialModule } from './material/material.module';

// Shared components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SortablejsModule } from 'ngx-sortablejs';

// App Components
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BuildSetComponent } from './build-set/build-set.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { LeadSheetComponent } from './lead-sheet/lead-sheet.component';
import { ScrollSongsComponent } from './scroll-songs/scroll-songs.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SetContextMenuComponent } from './set-context-menu/set-context-menu.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { ExportRtfComponent } from './export-rtf/export-rtf.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BuildSetComponent,
    EditSongComponent,
    LeadSheetComponent,
    ScrollSongsComponent,
    SetContextMenuComponent,
    HeaderComponent,
    ConfirmDialogComponent,
    MessageDialogComponent,
    ExportRtfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    SortablejsModule.forRoot({ animation: 150 })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule {}

