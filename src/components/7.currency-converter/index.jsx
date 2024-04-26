import { useEffect, useState } from "react";
import "./currency.css"

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [toCurrency,setToCurrency]=useState("INR");
  const [rates,setRates]=useState({});
  
  
  async function fetchExchangeRate(){
         try{
          const apiResponse=await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`,{
            method:"GET"
        }); 

        
        const result=await apiResponse.json();
        const ratesObj=result?.rates;
       
        setRates(ratesObj);

        const calculateRate=result?.rates[toCurrency];
        setExchangeRate(calculateRate);

        setConvertedAmount((amount*calculateRate).toFixed(2));
         }
         catch(error){
          console.log(error);
         }
    }

    useEffect(()=>{
         fetchExchangeRate();
    },[fromCurrency,toCurrency,amount])

    function handleAmountChange(event){
        setAmount(event.target.value);
    }

    function handleFromCurrencyChange(event){
        setFromCurrency(event.target.value);
        fetchExchangeRate()
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
          placeholder="Enter the amount"
        />
        <select value={fromCurrency} onChange={handleToCurrencyChange}>
          {
            Object.keys(rates).map((rate)=>(
              <option key={rate} value={rate}>{rate}
              </option>
            ))
          }
        </select>
      </div>
      <p>To</p>
      <div className="input-container">
        <input type="text" value={convertedAmount} readOnly/>
        <select value={toCurrency} onChange={handleFromCurrencyChange} >
           {
            Object.keys(rates).map((rate)=>(
             <option key={rate}value={rate}>{rate}</option>
           ))
           }
        </select>
      </div>
      <p>Exchange Rate:1 {fromCurrency}={exchangeRate} {toCurrency}</p>
    </div>
  );
}


export default CurrencyConverter;


//video 1:39 error occred