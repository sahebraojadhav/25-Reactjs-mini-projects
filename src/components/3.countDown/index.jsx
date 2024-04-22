import { useEffect, useRef, useState } from "react";
import "./timer.css"

function CountdownTimmer({initalTime,onTimeFinish}){

    const[time,setTime]=useState(initalTime);
    const[isRunning,setIsRunning]=useState(true);
    const intervalRefrence=useRef();

    useEffect(()=>{
        if(isRunning){
            intervalRefrence.current=setInterval(()=>{
                setTime(prevTime=>{
                    if(prevTime===0)
                    {
                        clearInterval(intervalRefrence.current);
                        setIsRunning(false);

                        if(onTimeFinish){
                            onTimeFinish();
                        }

                        return 0;
                    }
                    return prevTime-1;
                })
            },1000)
        } else{
            clearInterval(intervalRefrence.current);
        }
        return ()=>{
            clearInterval(intervalRefrence.current);
        }
    })

    function handlePauseAndResume(){
        setIsRunning((prevIsRunning)=> !prevIsRunning);
    }

    function handleReset(){
        clearInterval(intervalRefrence.current);
        setTime(initalTime);
        setIsRunning(false);
    }

    function handleStart(){
        setIsRunning(true);
    }

   

    const minute=Math.floor(time/60);
    const seconds=time%60;

    return(
        <div className="timmer">
            <p>
                {String(minute).padStart(2,'0')}:{String(seconds).padStart(2,'0')}
            </p>
            <div className="timer-buttons">
                <button className="resume" onClick={handlePauseAndResume}>{(isRunning)? "Pause" :"Resume" }</button>
                <button className="reset" onClick={handleReset}>Reset</button>
                <button className="start" onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default CountdownTimmer; 