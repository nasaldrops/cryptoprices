import React, { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const [shibPrice, setShibPrice] = useState('');
  const [luncPrice, setLuncPrice] = useState('');
  const [ethPrice, setEthPrice] = useState('');
  const [btcPrice, setBtcPrice] = useState('');



  const fetchPrice = async () => {
    const result = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=SHIBBUSD');
    console.log(result.data.price)
    setShibPrice(result.data.price)


  };

  const fetchPriceLUNC = async () => {
    const result = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=LUNCBUSD');
    console.log(result.data.price)
    setLuncPrice(result.data.price)


  };

  const fetchPriceETH = async () => {
    const result = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ETHBUSD');
    console.log(result.data.price)
    setEthPrice(result.data.price)


  };

  const fetchPriceBTC = async () => {
    const result = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCBUSD');
    console.log(result.data.price)
    setBtcPrice(result.data.price)


  };

  return (
    <div className="container">
      <div>
        <h1 className="title"> {shibPrice} </h1>
        <button onClick={fetchPrice} className="btn btn-warning btn-lg">SHIB Price</button>
        <br />
        <h1 className="title"> {luncPrice} </h1>
        <button onClick={fetchPriceLUNC} className="btn btn-warning btn-lg">LUNC Price</button>
        <br />
        <h1 className="title"> {ethPrice} </h1>
        <button onClick={fetchPriceETH} className="btn btn-warning btn-lg">ETH Price</button>
        <br />
        <h1 className="title"> {btcPrice} </h1>
        <button onClick={fetchPriceBTC} className="btn btn-warning btn-lg">BTC Price</button>
      </div>

    </div>
  )

}


export default App;