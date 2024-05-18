import React, { useState } from 'react'

function DragAndDropCustomImplementation() {
    const[task,setTask]=useState([
        {id:1, title:"task 1",status:"todo"},
        {id:2, title:"task 2",status:"todo"},
        {id:3, title:"task 3",status:"todo"},
        {id:4, title:"task 4",status:"todo"}, 
        {id:5, title:"task 5",status:"todo"}
    ] 
    )

    const [draggedItem,setDraggedItem]=useState([]);
  return (
    <div>
       
    </div>
  )
}

export default DragAndDropCustomImplementation

