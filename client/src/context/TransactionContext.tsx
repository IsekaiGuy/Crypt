import {ethers} from "ethers";
import {contractABI, contractAddress} from "../utils/contants";
import {createContext, useEffect, useState} from "react";

export const TransactionContext = createContext({} as any);

const {ethereum}:any = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log(provider, signer, transactionContract);
}

export const TransactionProvider = ({children}:any) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const checkIfWalletIsConnected = async () => {
       try {
           if(!ethereum) return alert('PLEASE, INSTALL METAMASK!');

           const accounts = await ethereum.request({method: 'eth_accounts'});

           if(accounts.length) {
               setCurrentAccount(accounts[0]);
           } else {
               console.log('No accounts found');
           }
       } catch (err) {
           console.log(err);

           throw new Error('No ethereum object');
       }
    }

    const connectWallet = async () => {
        try {
          if(!ethereum) return alert('PLEASE, INSTALL METAMASK!');

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        } catch(err) {
            console.log(err);

            throw new Error('No ethereum object');
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount}}>
            {children}
        </TransactionContext.Provider>
    )
}
