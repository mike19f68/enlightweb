import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { ExportRtfComponent } from '../export-rtf/export-rtf.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string){
    return this.dialog.open(ConfirmDialogComponent,{
      width: '390px',
      panelClass: 'mdf-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

  openMessageDialog(msg: string, success: boolean){
    return this.dialog.open(MessageDialogComponent,{
      width: '390px',
      panelClass: 'mdf-dialog-container',
     disableClose: true,
      data: {
        message: msg,
        success
      }
    });
  }

  openExportRTFDialog(msg: string, success: boolean){
    return this.dialog.open(ExportRtfComponent,{
      width: '900px',
      panelClass: 'mdf-dialog-container',
      disableClose: true,
      data: {
        message: msg,
        success
      }
    });
  }
}
