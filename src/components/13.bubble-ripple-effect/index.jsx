import React, { useEffect, useState } from "react";
import './ripple.css'

function ButtonRippleEffect() {
  const [isRipplingEffect, setIsRipplingEffect] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: -1, y: -1 });

  function handleRippleEffect(event){
    console.log(event.target.getBoundingClientRect())
    const rect=event.target.getBoundingClientRect();
    setCoordinate({
        x:event.clientX-rect.left,
        y:event.clientY-rect.top, 
    })
}

    console.log(coordinate);

    useEffect(()=>{
        if(coordinate.x !==-1 && coordinate.y !== -1){
            setIsRipplingEffect(true);
            setTimeout(()=>setIsRipplingEffect(false),500)
        }else{
            setIsRipplingEffect(false);
        }
    },[coordinate])

    useEffect(()=>{
        if(!isRipplingEffect) setCoordinate({x:-1,y:-1});
    },[isRipplingEffect])

  return (
    <div className="ripple-effect-container">
      <h1>Button Ripple Effect</h1>
      <button className="ripple-btn" onClick={handleRippleEffect}>
        {
            isRipplingEffect ? 
            <span className="ripple-inner-span"
             style={{left:coordinate.x,
                top:coordinate.y
             }}
            ></span>:null
        }
        Click Button to see ripple Effect</button>
    </div>
  );
}

export default ButtonRippleEffect;
 