import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [price, setPrice] = useState("");
  const [cPair, setPair] = useState("");

  const fetchPrice = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=" + cPair
    );
    console.log(result.data.price);
    setPrice(result.data.price);
  };

  const cryptoPair = (event) => {
    console.log(event.target.value);
    setPair(event.target.value);
  };

  const getPrice = async () => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=SHIBBUSD"
    );
    console.log(result.data.price);
    setPrice(result.data.price);
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">
          {cPair} {price}
        </h1>
        <div>
          <input type="text" onChange={cryptoPair} />
        </div>

        <button onClick={fetchPrice} className="btn btn-warning btn-lg">
          Search Price
        </button>
      </div>
      <div>
        {" "}
        <button onClick={getPrice} className="btn btn-warning btn-lg">
          SHIB Price
        </button>
      </div>
    </div>
  );
}

export default App;
