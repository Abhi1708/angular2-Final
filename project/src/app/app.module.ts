import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { DropdownDirective } from "./dropdown.directive";

import { TopNavComponent } from "./topNav/topNav.component";
import { MenuDetailComponent } from "./topNav/menuDetail/menuDetail.component";
import { MenuComponent } from "./topNav/menu/menu.component";
import { MenuService } from "./shared/menu.service";
import { SellerInfoService } from "./shared/sellerinfo.service";
import { SellerInfoComponent } from './topNav/sellerInfo/sellerInfo.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    TopNavComponent,
    MenuDetailComponent,
    MenuComponent,
    SellerInfoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MenuService, SellerInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
