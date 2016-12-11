import { Injectable } from '@angular/core';

import { Menu } from "./menu";
import { SubMenu } from "./submenu";

@Injectable()
export class MenuService {
  private menus: Menu[] = (<any>window).applicationContext;

    
  constructor() {}

  getMenus() {
    return this.menus;
  }
}
