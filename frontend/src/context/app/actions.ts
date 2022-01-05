export enum AppActions {
  SET_NFT_CONTRACT = "SET_NFT_CONTRACT",
  SET_NFT_ACCOUNT = "SET_NFT_ACCOUNT",
  SET_MARKET_CONTRACT = "SET_MARKET_CONTRACT",
}

export interface ISetNFTContract {
  type: AppActions.SET_NFT_CONTRACT;
  contract: any;
}

export interface ISetMartketContract {
  type: AppActions.SET_MARKET_CONTRACT;
  contract: any;
}

export interface ISetNFTAccount {
  type: AppActions.SET_NFT_ACCOUNT;
  account: any;
}

export type AppAction = ISetNFTContract | ISetNFTAccount | ISetMartketContract;

export function setNFTContract(contract: any): ISetNFTContract {
  return {
    type: AppActions.SET_NFT_CONTRACT,
    contract,
  };
}

export function setNFTAccount(account: any): ISetNFTAccount {
  return {
    type: AppActions.SET_NFT_ACCOUNT,
    account,
  };
}


export function setMartketContract(contract: any): ISetMartketContract {
  return {
    type: AppActions.SET_MARKET_CONTRACT,
    contract,
  };
}
