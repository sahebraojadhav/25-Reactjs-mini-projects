import React, { useState } from "react";

function RenderTodo({ Todos, handleDragStart,onEdit,onDelete,editTodo,deleteTodo }) {
  const[edit,setEdit]=useState(false);

  console.log("hey everyONe wwe are here",Todos);
  return (
    <ul>
      { 
      Todos.map((todo)=>(
        <li>
          {todo.todoText}
          {todo.id}
          <button className="edit" onClick={(e)=>{editTodo(todo.id)}}>
            {
              (edit)?"Save":"✏️Edit"
            
            }       
            </button>
                
          <button className="Delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </li>
      )
      )}
    </ul>
  );
}

export default RenderTodo;
