import React, { useState } from "react";
import './bmi.css'

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isBmiCalculated, setIsBmiCalculated] = useState(false);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  function calculateBmi() {
    let heightInMeter = height / 100;
    console.log(heightInMeter);
    console.log(heightInMeter * heightInMeter);
    let calculatedBmi = weight / (heightInMeter * heightInMeter);
    console.log("bmi calculation", calculatedBmi);
    setIsBmiCalculated(true);
    setBmi(calculatedBmi.toFixed(2));

    if (calculatedBmi < 18.5) setMessage("UnderWeight");
    else if (calculatedBmi >= 18.5 && calculatedBmi <= 25)
      setMessage("Normal Weight");
    else if (calculatedBmi >= 30 && calculatedBmi < 35)
      setMessage("Oesity (Class I)");

    console.log(message);
  }

  return (
    <div className="bmi-container">
      <h1>Bmi Calculator</h1>
      <div className="input-fields">
        <span>
          weight:
          <input
          placeholder="in (KG)"
            type="number"
            min={0}
            onChange={(e) => setWeight(e.target.value)}
          />
        </span>
        <span>
          height:
          <input
          placeholder="in (Cm)"
            type="number"
            min={0}
            onChange={(e) => setHeight(e.target.value)}
          />
        </span>
        <button onClick={calculateBmi}>Calculate</button>
      </div>
      {isBmiCalculated ? (
        <div className="output">
          <p>{`YOur BMI is: ${bmi}`}</p>
          <p className="message-text">
           {`you are ${message}`} 
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default BmiCalculator;
