import { Component, OnInit, Input } from '@angular/core';

import { Menu } from '../../shared/menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html' ,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menu: Menu;

  constructor() {}

  ngOnInit() {
  }
}
