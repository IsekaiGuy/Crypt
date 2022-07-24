import {ethers} from "ethers";
import {contractABI, contractAddress} from "../utils/contants";
import {createContext, useEffect} from "react";

export const TransactionContext = createContext({value:''});

const {ethereum}:any = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log(provider, signer, transactionContract);
}

export const TransactionProvider = ({children}:any) => {
    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert('PLEASE, INSTALL METAMASK!');

        const accounts = await ethereum.request({method: 'eth_accounts'});
        console.log('Accounts: ', accounts);
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    return (
        <TransactionContext.Provider value={{value: 'test'}}>
            {children}
        </TransactionContext.Provider>
    )
}
