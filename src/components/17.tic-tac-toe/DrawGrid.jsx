import React from 'react'

function DrawGrid({grid,handleClick,checkWinnerOfGame}) {
    
    console.log(grid);
    console.log(grid[2][2])

  return (
    <div className="board">
        {
            grid.map((row,rowIndex)=>(
                <div className="row" key={rowIndex}>
                    {
                        row.map((cell,cellIdx)=>(
                            <div className='cell'
                              key={cellIdx}
                              onClick={(e)=>{handleClick(cellIdx,rowIndex),checkWinnerOfGame(),console.log(e)}}
                            >
                             {cell}
                            </div>
                        ))
                    }
                </div>
            ))
        }
    </div>
  )
}

export default DrawGrid
