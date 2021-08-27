import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './Auth/login/login.component';
import { BuildSetComponent } from './build-set/build-set.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { LeadSheetComponent } from './lead-sheet/lead-sheet.component';

const routes: Routes = [
    { path: 'Login', component: LoginComponent},
    { path: 'BuildSet', component: BuildSetComponent},
    { path: 'EditSong', component: EditSongComponent},
    { path: 'LeadSheet', component: LeadSheetComponent},
    { path: '**', redirectTo: ''}
  ];

export const appRoutingModule = RouterModule.forRoot(routes);
