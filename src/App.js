import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";


class App extends React.Component {
  constructor () {
    super ()
     this.state = {
       todos: todosData

     }
  }

  render () {
    let todoItems = this.state.todos.map(item=> <TodoItem key={item.id} item = {item} />)
  return (
    
      <div> 
        
        <h1>To Do List</h1>
        {todoItems}
      </div>
    )
  }
  
}

export default App;



