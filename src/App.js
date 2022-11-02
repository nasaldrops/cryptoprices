import React, { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const [shibPrice, setShibPrice] = useState('');
  const [luncPrice, setLuncPrice] = useState('');



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

  return (
    <div className="container">
      <div>
        <h1 className="title"> { shibPrice } </h1>
        <button onClick={fetchPrice} className="btn btn-warning btn-lg">SHIB Price</button>
        <br/>
        <h1 className="title"> { luncPrice } </h1>
        <button onClick={fetchPriceLUNC} className="btn btn-warning btn-lg">LUNC Price</button>
      </div>

    </div>
  )

}


export default App;


