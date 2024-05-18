import React, { useState } from 'react'
import "./dragAndDrop.css"
import RenderTodo from './RenderTodo';

function Application() {

  const[editingId,setEditingId]=useState(null)

  const[todoInput,setTodoInput]=useState('');

  const [pendingTodos,setpendingTodos]=useState([
    {id:0,todoText:"we will be happy",iscompleted:false},
    {id:1,todoText:"we wil changt",iscompleted:false},
    {id:2,todoText:"sahebrao from thsi side",iscompleted:true},
    {id:3,todoText:"we dont have gf",iscompleted:false}
  ])


  const [id,setId]=useState(pendingTodos.length);

  const submitInput=()=>{
    let newId=pendingTodos.length;
    let completeValue=(newId%2==0)?true:false;
      setpendingTodos([...pendingTodos,{id:newId,todoText:todoInput,iscompleted:completeValue}]);
      setId((id)=>id+1)
    
    setTodoInput('');
  }

  function handleDragStart(event,index){
      console.log(event,index);
      console.log(todos[index]);
  }

  function editTodo(id){
    console.log(id)
    console.log(pendingTodos[id]);
    
  }

  function deleteTodo(id){
    console.log(id);
  }

  console.log(pendingTodos[editingId]);

  return (
    <div className="App">
      <input type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
      <button onClick={submitInput}>submit</button>
      <div className="todo-container">
      <ul>
      { 
      pendingTodos.map((todo)=>(
        <li key={todo.id}>
          {
            (editingId==todo.id)?
            <input type="text" value={pendingTodos[editingId].todoText} onChange={(e)=>setTodoInput(e.target.value)}/>:
            todo.todoText     
          }
          
          <button className="edit" onClick={(e)=>{setEditingId(todo.id)}}>
            {editingId===todo.id?
            "Save":"Edit"}       
            </button>
                
          <button className="Delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </li>
      )
      )}
    </ul>
            
      </div>
         
    </div>
  );
}

export default Application;


//we are decing which todo should be placed where and 
//and try to render it 