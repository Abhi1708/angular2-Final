import { Component, OnInit, Input} from '@angular/core';

import { Menu } from "../../shared/menu";

@Component({
  selector: 'menuDetail',
  templateUrl: 'menuDetail.component.html',
  styleUrls: ['menuDetail.component.css']
})
export class MenuDetailComponent implements OnInit {
  @Input() selectedMenu: Menu;

  constructor() {}

  ngOnInit() {
  }  
}
