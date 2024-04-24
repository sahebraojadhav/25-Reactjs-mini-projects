import { useEffect, useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [toCurrency,setToCurrency]=useState('INR');

    async function fetchExchangeRate(){
        const apiResponse=await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`,{
            method:"GET"
        }); 

        const result=apiResponse.json();
        const calculateRate=result?.rates[toCurrency];
        setExchangeRate(calculateRate);

        setConvertedAmount((amount*calculateRate).toFixed(2));
    }

    useEffect(()=>{
         fetchExchangeRate();
    },[fromCurrency,toCurrency,amount])

    function handleAmountChange(event){
        setAmount(event.target.value);
    }

    function handleFromCurrencyChange(event){
        setFromCurrency(event.target.value);
    }

    function handleToCurrencyChange(event){
        setToCurrency(event.target.value);
    }

  return (
    <div
      value={amount}
      onChange={handleAmountChange}
      className="currency-converter"
    >
      <h1>Currency Converter</h1>
      <div className="input-container">
        <input
          type="number"
          name="fromcurrency"
          placeholder="Enter the currency"
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value={"USD"}>USD</option>
            <option value={"INR"}>INR</option>
            <option value={"EUR"}>EUR</option>
        </select>
      </div>
      <p>To</p>
      <div className="input-container">
        <input type="text" value={convertedAmount} readOnly/>
        <select value={toCurrency} onChange={handleFromCurrencyChange} >
            <option value={"EUR"}>EUR</option>
            <option value={"USD"}>USD</option>
            <option value={"INR"}>INR</option>  
        </select>
      </div>
      <p>Exchange Rate:1 {fromCurrency}={exchangeRate} {toCurrency}</p>
    </div>
  );
}


export default CurrencyConverter;