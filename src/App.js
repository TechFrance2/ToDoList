import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";


class App extends React.Component {
  constructor () {
    super ()
     this.state = {
       todos: todosData

     }
  this.handleChange = this.handleChange.bind (this)
  }
handleChange (id) {
  this.setState (prevState => {
    let updatedTodos = prevState.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      } 
        return todo   
    })
      return {
        todos: updatedTodos
      }
  })
}
  render () {
    let todoItems = (this.state.todos).map(item=> <TodoItem key={item.id} item = {item} 
    handleChange = {this.handleChange}/> )

  
    return (
      <div className = "todo-list"> 
        
        <h1>To Do List</h1>
            {todoItems}
      </div>
    )
  }
  
}

export default App;



