import React from "react";

const Todo = ({todo, deleteTodo, completeTodo })=> {
    return(
    <div 
      className="todo" 
      style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >

    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
      {todo.date && todo.time && (
        <p className="date-time">{todo.date} às {todo.time}</p>
      )}
      {todo.date && !todo.time && (
        <p className="date-time">Data: {todo.date}</p>
      )}
      {!todo.date && todo.time && (
        <p className="date-time">Hora: {todo.time}</p>
      )}
    </div>
    <div>
      <button className="complete" onClick={()=> completeTodo(todo.id)}>
        Completar
      </button>
      <button className="delete" onClick={()=> deleteTodo(todo.id)}>
        X
      </button>
    </div>
  </div>
  )
}

export default Todo;