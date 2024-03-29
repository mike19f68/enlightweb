import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BuildSetComponent } from './build-set/build-set.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { LeadSheetComponent } from './lead-sheet/lead-sheet.component';
import { ExportRtfComponent } from './export-rtf/export-rtf.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'BuildSet', component: BuildSetComponent},
  { path: 'EditSong', component: EditSongComponent},
  { path: 'LeadSheet', component: LeadSheetComponent},
  { path: 'ExportRtf', component: ExportRtfComponent},
  { path: '**', redirectTo: '\Login'}
  ];

export const appRoutingModule = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
