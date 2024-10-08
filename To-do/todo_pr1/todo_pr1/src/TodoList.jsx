import React from 'react'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <>
    {todos?.length > 0 ? (
        <ul className="list">
            {todos.map((todo, index)=>(
                 <div className="todo">
                    <li key={index}>{todo}</li>
                    <button onClick={()=>{deleteTodo(todo)}}>delete</button>
                 </div>
            ))}
        </ul>
    ) : (
        <div className="msg">
            <p>No todos</p>
        </div>
    )}
    </>
  )
}

export default TodoList