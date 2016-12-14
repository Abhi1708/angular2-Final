import {Action} from '@ngrx/store';
import { SellerInfo } from '../shared/sellerinfo';



			
var defaultState = <SellerInfo>{orgName: 'me',
	branchNumber: 'me',
	sellerNumber: 'me',
															
}			
															
export const appState = (state: SellerInfo = defaultState, action: Action) => {
	console.log('paylod',action.payload)
  switch (action.type) {
  	case 'LOAD_SELLER': 
    	return <SellerInfo>{orgName: action.payload.menus.orgName, branchNumber: action.payload.menus.branchNumber, sellerNumber: action.payload.menus.sellerNumber}
    default:
      return state;
  }
};