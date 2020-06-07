import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-context-menu',
  templateUrl: './set-context-menu.component.html',
  styleUrls: ['./set-context-menu.component.css']
})
export class SetContextMenuComponent implements OnInit {

  @Input() x = 0;
  @Input() y = 0;
  @Input() menuitems = '';
  @Input() index = 0;
  theMenuItems = [];
  @Output() menuItemSelected = new EventEmitter();

  constructor() { }

  outputSelectedMenuItem( menuitem: string) {
    this.menuItemSelected.emit(menuitem);
  }

  ngOnInit() {
    this.theMenuItems = this.menuitems.split(';');
  }
}
