import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  CommonModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDialogModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
