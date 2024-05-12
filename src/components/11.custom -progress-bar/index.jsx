//2:38:53
import React, { useState } from 'react'
import './customProgress.css'

function CustomProgressBar() {
    const[inputPercentage,setInputPercentage]=useState(0);
    console.log(inputPercentage);
    console.log("hey its just func activity");

    function handleInputChange(e){
        if(e.target.value<=100){
            setInputPercentage(e.target.value);
        }
        else{
            setInputPercentage(100);
        }
    }

    
    return (
    <div className='main-progress-container'>
      <h2>Custom Progress Bar</h2>
      <div className="progress-wrapper">
        <div className="progress-container">
          <div className="progress" style={{backgroundColor:'skyblue',borderRadius:"20px",width:`${inputPercentage}%`, height:'100%'}}></div>
        </div>
      </div>
       <div className="inputs">
         <span>Input Percnetage:</span>
         <input type="number"
          value={inputPercentage} 
          max="100"
          onChange={handleInputChange} />
       </div>
    </div>
  )
}

export default CustomProgressBar;
