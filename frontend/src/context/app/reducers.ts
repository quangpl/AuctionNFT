import { AppAction, AppActions } from "./actions";

export interface IAppState {
  nftContract: any;
  account: any;
}

export const initialAppState = {
  nftContract: undefined,
  account: undefined,
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
    default:
      return {
        ...state,
      };
  }
};
