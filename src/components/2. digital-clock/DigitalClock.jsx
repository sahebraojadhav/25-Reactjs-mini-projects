import { useEffect, useState } from "react";
import "./clock.css"
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId=setInterval(()=>{
        setTime(new Date())
    },1000)

    return()=>{
        clearInterval(intervalId);
    }
  })

  return (
    <div className="main">
      <h1>Digital Clock</h1>
      <div className="clock">
        <div className="time">
          <span className="digital-time">{time.getHours().toString().padStart(2, "0")}:</span>
          <span className="digital-time">{time.getMinutes().toString().padStart(2, "0")}:</span>
          <span className="digital-time">{time.getSeconds().toString().padStart(2, "0")}</span>
        </div>
        <div className="date">
            {
                time.toLocaleDateString(undefined,{
                    weekday:'long',
                    year:'numeric',
                    month:'long',
                    day:'numeric'
                })
            }
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
