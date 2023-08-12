import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BuildSetComponent } from './build-set/build-set.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { LeadSheetComponent } from './lead-sheet/lead-sheet.component';
import { ExportRtfComponent } from './export-rtf/export-rtf.component';
import { AuthGuard } from './auth/auth.guard';
import { DatePipe } from '@angular/common';

const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'BuildSet', component: BuildSetComponent, canActivate: [AuthGuard]},
  { path: 'EditSong', component: EditSongComponent, canActivate: [AuthGuard]},
  { path: 'LeadSheet', component: LeadSheetComponent, canActivate: [AuthGuard]},
  { path: 'ExportRtf', component: ExportRtfComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      AuthGuard,
      DatePipe
    ]
  })
  export class AppRoutingModule {}

