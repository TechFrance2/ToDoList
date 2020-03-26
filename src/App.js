import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";


function App() {
  const todoItems = todosData.map(item=> <TodoItem key={item.id} item = {item} />)
  return (
    
    <div> 
      
      <h1>To Do List</h1>
      {todoItems}
    </div>
  );
}

export default App;



