import { AppAction, AppActions } from "./actions";

export interface IAppState {
  nftContract: any;
  account: any;
  marketContract: any;
}

export const initialAppState = {
  nftContract: undefined,
  account: undefined,
  marketContract: undefined,
};

export const appReducer = (state: IAppState, action: AppAction) => {
  switch (action.type) {
    case AppActions.SET_NFT_CONTRACT:
      return {
        ...state,
        ...{
          nftContract: action.contract,
        },
      };
    case AppActions.SET_NFT_ACCOUNT:
      return {
        ...state,
        ...{
          account: action.account,
        },
      };
    case AppActions.SET_MARKET_CONTRACT:
      return {
        ...state,
        ...{
          marketContract: action.contract,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
