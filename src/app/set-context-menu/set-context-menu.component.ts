import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-context-menu',
  templateUrl: './set-context-menu.component.html',
  styleUrls: ['./set-context-menu.component.css']
})
export class SetContextMenuComponent implements OnInit {

  @Input() x = 0;
  @Input() y = 0;
  @Input() index = 0;

  constructor() { }

setStandard(index) {
  console.log(index);
}

setPre(index) {
  console.log(index);
}

setExtra(index) {
  console.log(index);
}

  ngOnInit() {
  }
}
