
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-export-rtf',
  templateUrl: './export-rtf.component.html',
  styleUrls: ['./export-rtf.component.css']
})
export class ExportRtfComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public ExportRtfRef: MatDialogRef<ExportRtfComponent>,
    public ExportRtf: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.ExportRtfRef.close();
  }

}
