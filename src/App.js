import React from 'react';
import logo from './logo.svg';
import './App.css';
import {QRCodeSVG} from 'qrcode.react';



export default function App() {
  const fetchOnline = async () => {
    const response = await fetch("https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/WIP/x00.txt");
    const data = await response.text();
    const result = await data.toString();
    console.log(await {result});
     return({result});
  };




  document.getElementById('mountNode')
  const result = "https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/WIP/x00.txt";
  return (
    <div>
    <QRCodeSVG value= {this.result}/>
      <button onClick={fetchOnline}>Fetch Data Online (async/await)</button>
    </div>
  );
}
