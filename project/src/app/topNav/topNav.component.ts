import { Component, OnInit, EventEmitter, Output, HostBinding, HostListener, Directive } from '@angular/core';

import { Menu } from '../shared/menu';
import { SellerInfo } from '../shared/sellerInfo';

import { MenuService } from "../shared/menu.service";
import { SellerInfoService } from "../shared/sellerinfo.service";


@Component({
  selector: 'topNav',
  templateUrl: 'topNav.component.html',
  styleUrls: ['topNav.component.css']
})
export class TopNavComponent implements OnInit {
  private active:boolean = false;

  menus: Menu[] = [];
  sellerInfo: SellerInfo;


  constructor(private menuService: MenuService, private sellerinfoService: SellerInfoService) {}

  ngOnInit() {
    this.menus = this.menuService.getMenus();
    this.sellerInfo = this.sellerinfoService.getSellerInfo();
    console.log(this.sellerInfo);
  }
  
  onSelected() {
    
    this.active = true;
  }
}







