import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [shibPrice, setShibPrice] = useState("");
  const [luncPrice, setLuncPrice] = useState("");
  const [ethPrice, setEthPrice] = useState("");
  const [btcPrice, setBtcPrice] = useState("");
  const [dogePrice, setDogePrice] = useState("");
  const [pepePrice, setPepePrice] = useState("");
  const [eurPrice, setEurPrice] = useState("");

  const fetchPrice = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=SHIBBUSD"
    );
    console.log(result.data.price);
    setShibPrice(result.data.price);
  };

  const fetchPriceLUNC = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=LUNCBUSD"
    );
    console.log(result.data.price);
    setLuncPrice(result.data.price);
  };

  const fetchPriceETH = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=ETHBUSD"
    );
    console.log(result.data.price);
    setEthPrice(result.data.price);
  };

  const fetchPriceBTC = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=BTCBUSD"
    );
    console.log(result.data.price);
    setBtcPrice(result.data.price);
  };

  const fetchPriceDOGE = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=DOGEBUSD"
    );
    console.log(result.data.price);
    setDogePrice(result.data.price);
  };

  const fetchPricePEPE = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=PEPEUSDT"
    );
    console.log(result.data.price);
    setPepePrice(result.data.price);
  };

  const fetchPriceEURO = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=EURBUSD"
    );
    console.log(result.data.price);
    setEurPrice(result.data.price);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchPrice();
      fetchPriceLUNC();
      fetchPriceETH();
      fetchPriceBTC();
      fetchPriceDOGE();
      fetchPricePEPE();
      fetchPriceEURO();
    }, 1000); // Fetch every 1000 ms (1 second)

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  return (
    <div className="card">
      <h1 className="title">SHIB: {shibPrice}</h1>
      <h1 className="title">PEPE: {pepePrice}</h1>
      <h1 className="title">LUNC: {luncPrice}</h1>
      <h1 className="title">DOGE: {dogePrice}</h1>
      <h1 className="title">ETH: {ethPrice}</h1>
      <h1 className="title">BTC: {btcPrice}</h1>
      <h1 className="title">EUR: {eurPrice}</h1>
    </div>
  );
}

export default App;
