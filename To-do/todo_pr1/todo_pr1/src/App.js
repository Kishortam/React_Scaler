import './App.css';
import { useState } from 'react';

function App() {

// for creating a single todo
const [todo, setTodo] =  useState("");

// to manage todo items to todoList
const [todos, setTodos] = useState([]);

// let’s create an onClickfunction addTodo to add todo item to the Todos array. This function will be triggered when the Addbutton is clicked.
const addTodo = ()=>{
  if(todo !== ""){  // check if todo input is not empty value, if not add it to the list
    setTodos([...todos, todo]); 
    setTodo(""); //clear the input field
  }
};

// Let’s start by creating a onClick function that triggers when the delete button is clicked.
const deleteTodo = (text) =>{
  const newTodos = todos.filter((todo)=>{
    return todo !== text;
  });
  setTodos(newTodos);
};

  return (
    <div className="App">
     <h1>React Todo App</h1>

     <div className="input-wrapper">
      <input type="text" name="todo" value={todo} 
       placeholder='create a new todo' onChange={(e)=>{setTodo(e.target.value)}} />
      <button className='add-button' onClick={addTodo}>Add todo</button>
      </div>

      {/* if todos length is greater than 0, then show todos, else show a message */}

      {todos?.length > 0 ?(
        <ul className="todo-list">
        {todos.map((todo, index)=>(
          <div className="todo">
            <li key={index}>{todo}</li>
            <button className='delete-button' onClick={()=>deleteTodo(todo)}>delete</button>
          </div>
        ))}
      </ul>
      ) : (
        <div className="empty">
          <p>No Task found</p>
        </div>
      )}
    </div>
  );
}

export default App;


// if you want make it to different components for TodoInput and TodoList.
// then import it in app.js, and add them into return box with props
// when creating a seperate functions add their required props in function arguments/ inputs
