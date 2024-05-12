import { useState } from "react";
import "./tip.css";
function TipCalculator() {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitCount, setSplitCount] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleCalculateTip() {
    if (
      !billAmount ||
      billAmount <= 0 ||
      !tipPercentage ||
      tipPercentage <= 0
    ) {
      setErrorMsg("please enter valid value and bill percentage");
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    const totalAmount = bill + tip;
    const tipAmountPerPerson = tip / splitCount;
    const totalAmountPerPerson = totalAmount / splitCount;

    setTipAmount({
      totalAmount: totalAmount.toFixed(2),
      tipPerPerson: tipAmountPerPerson.toFixed(2),
      totalPerPerson: totalAmountPerPerson.toFixed(2),
    });
    }

    return (
      <div className="tip-calculator-div">
        <h1>Tip Calculator</h1>
        <div className="input-div">
          <div className="bill-amount">
           <p>Bill Amount</p>
            <input
             type="number"
             value={billAmount}
             onChange={(e) => setBillAmount(e.target.value)}
            />
          </div>
         
          <div className="tip-percentage">
          <p>Tip percentage</p>
          <input
            type="number"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
          </div>
          <div className="number-of-people">
          <p>Number Of People</p>
          <input
            type="number"
            value={splitCount}
            onChange={(e) => setSplitCount(e.target.value)}
          />
          </div>
        </div>
        <button onClick={handleCalculateTip}>Calculate Tip</button>
        {tipAmount ? (
          <div className="tip-values">
            <p>Total Amount:{ tipAmount.totalAmount}</p>
            <p>Tip Per Person:{tipAmount. tipPerPerson}</p>
            <p>Total Amount Per Person:{tipAmount.totalPerPerson}</p>
          </div>
        ) : null}
      </div>
    );
 
}
export default TipCalculator;
