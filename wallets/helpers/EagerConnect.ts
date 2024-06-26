import { useConnectWallet } from '../hooks/useConnectWallet';
import {wallets} from './WalletHelper';

export const eagerConnection = async () => {
  //@ts-ignore
  const walletId = await JSON.parse(localStorage.getItem('wallet'));

  const getConnector = await Object.values(wallets).filter(
    (val: {[key: string]: any}) => val.id === walletId,
  );

  if (getConnector && getConnector[0]?.connectWallet) {
    void getConnector[0]?.connectWallet?.connector?.connectEagerly();
  }
};

export const getConnector: any = async () =>{

  const walletId = await JSON.parse(localStorage.getItem('wallet'));

  const getConnector = await Object.values(wallets).filter(
    (val: {[key: string]: any}) => val.id === walletId,
  );

  if (getConnector && getConnector[0]?.connectWallet) {    
    return getConnector[0]?.connectWallet?.connector
  }

  return 
}