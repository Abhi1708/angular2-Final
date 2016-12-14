import { Component, OnInit, EventEmitter, Output, HostBinding, HostListener, Directive, Input } from '@angular/core';

import { Menu } from '../shared/menu';
import { SellerInfo } from '../shared/sellerInfo';
import { Observable } from 'rxjs/Observable';
import { MenuService } from "../shared/menu.service";
import { SellerInfoService } from "../shared/sellerinfo.service";


import { Store, StoreModule } from '@ngrx/store';

@Component({
  selector: 'topNav',
  templateUrl: 'topNav.component.html',
  styleUrls: ['topNav.component.css']
  
})
export class TopNavComponent implements OnInit {
  private active:boolean = false;
 _appState: Observable<SellerInfo>;
  menus: Menu[] = [];
  
  //@Input hello: Menu;
  sellerInfo: SellerInfo;
  me: string;


  constructor(private menuService: MenuService, private sellerinfoService: SellerInfoService, private _store: Store<SellerInfo>) {}

  ngOnInit() {
	  
	  
	this._appState = this._store.select('appState');
	this.menus = this.menuService.getMenus()
	console.log('menus',this.menus)
   
    console.log(this.sellerinfoService.getSellerInfo());
	this._store.dispatch({type: "LOAD_SELLER", payload: {menus: this.sellerinfoService.getSellerInfo()}})
	
  }
  
  onSelected() {
    
    this.active = true;
  }
}







