import { Component, OnInit, Input, HostBinding, HostListener, Directive, Output } from '@angular/core';

import { SellerInfo } from "../../shared/sellerinfo";

@Component({
  selector: 'sellerInfo',
  templateUrl: './sellerInfo.component.html',
  styleUrls: ['./sellerInfo.component.css']

})

export class SellerInfoComponent implements OnInit {
	
	@Input() sellerInfo: SellerInfo;
	
  

  	constructor() { }

  	ngOnInit() {  		
  	}

 
  
  	
}

