import logo from '../../logo.png';
import { useState } from 'react';
import "./Header.css";
import {data} from "./Agreement";
import blockies from "../logos/blockies.png";

export default function Header() {

    function signMessage() {
        window.ethereum.request({
            method: "personal_sign",
            params: [data.agreement, accountAddress]
        }).then(result => {
                console.log(result);
                return true;
        });
    }

    async function getAccount() {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        return accounts[0];
    }

    const [accountAddress, setAccountAddress] = useState('');
    const connectWallet = () => {
        if(typeof window.ethereum !== 'undefined'){
            window.ethereum.enable().then(async () => {
                const account = await getAccount();
                setAccountAddress(account);
            }).catch(error => {
                console.log(error);
            }
            );
        }
        const signHash = signMessage();
        console.log(signHash);
    }

    return (
        <div class="Header">
            <img src={logo} class="Header-logo" alt="logo" />
            <a class="Header-button" onClick={connectWallet}>
                {!!accountAddress ?
                    <div class="walletConnected">
                        <img class="blockies" src={blockies} />
                        <p class="max-lines">{accountAddress}</p>
                        <h4>Connected !</h4>
                    </div>                   
                : 
                "Connect Wallet"}
            </a>
        </div>
    );
}
