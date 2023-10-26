import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [prices, setPrices] = useState({});
  const [order, setOrder] = useState([
    "SHIB",
    "PEPE",
    "LUNC",
    "ETH",
    "BTC",
    "DOGE",
    "EUR",
  ]);

  useEffect(() => {
    const fetchPrices = async () => {
      const symbols = [
        "SHIBBUSD",
        "PEPEUSDT",
        "LUNCBUSD",
        "ETHBUSD",
        "BTCBUSD",
        "DOGEBUSD",
        "EURBUSD",
      ];
      try {
        const results = await Promise.all(
          symbols.map((symbol) =>
            axios.get(
              `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
            )
          )
        );
        const newPrices = {};
        results.forEach((result, index) => {
          const symbol = symbols[index].replace("BUSD", "").replace("USDT", "");
          newPrices[symbol] = result.data.price;
        });
        setPrices(newPrices);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    const intervalId = setInterval(fetchPrices, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("startIndex", index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, endIndex) => {
    const startIndex = parseInt(e.dataTransfer.getData("startIndex"));
    const newOrder = [...order];
    [newOrder[startIndex], newOrder[endIndex]] = [
      newOrder[endIndex],
      newOrder[startIndex],
    ];
    setOrder(newOrder);
  };

  useEffect(() => {
    if (prices.PEPE !== undefined && prices.SHIB !== undefined) {
      document.title = `P:${prices.PEPE} S:${prices.SHIB}`;
    }
  }, [prices.PEPE, prices.SHIB]);

  return (
    <div className="card">
      {order.map((symbol, index) => (
        <h1
          className="title"
          key={symbol}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, index)}
        >
          {symbol}: {prices[symbol] || "Loading..."}
        </h1>
      ))}
    </div>
  );
}

export default App;
