import React, { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const [shibPrice, setShibPrice] = useState('');
  const [luncPrice, setLuncPrice] = useState('');
  const [ethPrice, setEthPrice] = useState('');
  const [btcPrice, setBtcPrice] = useState('');
  const [dogePrice, setDogePrice] = useState('');
  const [eurPrice, setEurPrice] = useState('');
  const [donadeaWeather, setDonadeaWeather] = useState('');
  const [windSpeed, setWindSpeed] = useState('');


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

  const fetchPriceDOGE = async () => {
    const result = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=DOGEBUSD');
    console.log(result.data.price)
    setDogePrice(result.data.price)


  };

  const fetchPriceEURO = async () => {
    const result = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=EURBUSD');
    console.log(result.data.price)
    setEurPrice(result.data.price)


  };
    
  const fetchWeather = async () => {
    const result = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=53.3477317&lon=-6.7444321&appid=834d978066a850d20e566854e9103773&units=metric');
    console.log(result.data.main.temp)
    setDonadeaWeather(result.data.main.temp)
    setWindSpeed(result.data.wind.speed)
    


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
        <h1 className="title"> {dogePrice} </h1>
        <button onClick={fetchPriceDOGE} className="btn btn-warning btn-lg">DOGE Price</button>
        <br />
        <h1 className="title"> {ethPrice} </h1>
        <button onClick={fetchPriceETH} className="btn btn-warning btn-lg">ETH Price</button>
        <br />
        <h1 className="title"> {btcPrice} </h1>
        <button onClick={fetchPriceBTC} className="btn btn-warning btn-lg">BTC Price</button>
        <br />
        <h1 className="title"> {eurPrice} </h1>
        <button onClick={fetchPriceEURO} className="btn btn-warning btn-lg">EUR Price</button>
        <h1 className="title" class="wind"> temp: {donadeaWeather} wind speed: {windSpeed} </h1>
        <button onClick={fetchWeather} className="btn btn-warning btn-lg">Weather</button>
      </div>

    </div>
  )

}


export default App;