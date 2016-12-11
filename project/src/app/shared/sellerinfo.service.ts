import { Injectable } from '@angular/core';

import { SellerInfo } from "./sellerinfo";

@Injectable()
export class SellerInfoService {

	private sellerInfo:SellerInfo =	{"orgName":"Bank of American,N.A.(121898)", "branchNumber":"73209", "sellerNumber":"121898"};
	
	constructor() { }

	getSellerInfo() {
   	 return this.sellerInfo;
  	}
}
