import React, { useState } from 'react'
import DrawGrid from './DrawGrid.jsx';
import './tick-tac-toe.css'

function TickTacToe() {
    const[currentPlayer,setCurrentPlayer]=useState('X');
    const[checkWinner,setCheckWinner]=useState(false);
    const[winner,setWinner]=useState(null);
    const[grid,setGrid]=useState([
                                ['-','-','-'],
                                ['-','-','-'],
                                ['-','-','-']
                            ]);
 
    const handleClick=(inputVal,rowIdx)=>{
        setCurrentPlayer(currentPlayer==='X'?'O':'X')
        if(grid[rowIdx][inputVal]==='-')
        setGrid([...grid],grid[rowIdx][inputVal]=currentPlayer);
        console.log(inputVal,rowIdx)
    }

    const checkWinnerOfGame=()=>{
      console.log("this fuction is working fine")
      if(grid[0][0]!=='-' && grid[0][0]===grid[1][1] && grid[1][1]===grid[2][2]){
        console.log("winner found");
        setCheckWinner(true)
      }
      else if(grid[0][0]!=='-' && grid[0][0]===grid[1][0] && grid[1][0]===grid[2][0]){
        console.log("winner found");
        setCheckWinner(true)
      }
      else if(grid[0][0]!=='-' && grid[0][0]===grid[0][1] && grid[0][1]===grid[0][2]){
        console.log("winner found");
        setCheckWinner(true)
      }
      else if(grid[2][0]!=='-' && grid[2][0]===grid[1][1] && grid[1][1]===grid[0][2]){
        console.log("winner found");
        setCheckWinner(true)
      }
      else if(grid[1][0]!=='-' && grid[1][0]===grid[1][1] && grid[1][1]===grid[1][2]){
        console.log("winner found");
        setCheckWinner(true)
      }

      else if(grid[2][0]!=='-' && grid[2][0]===grid[2][1] && grid[2][1]===grid[2][2]){
        console.log("winner found");
        setCheckWinner(true)
      }
    }

    return (
    <>
    <h1>Tick tac toe game</h1>
    <DrawGrid grid={grid} handleClick={handleClick} checkWinnerOfGame={checkWinnerOfGame}/>
        {
          checkWinner ? <h2>winner is {currentPlayer === 'X' ? 'O' :'X'} </h2>: null
        }
      
    </>
  )
}

export default TickTacToe;
