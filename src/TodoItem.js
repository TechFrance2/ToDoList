import React from "react"

function TodoItem (props) {
    return (
        <div className = "todo-item">
        
        <p>
        
            <input type="checkbox" checked = {props.item.completed} />
               {props.item.text}
            
        </p>
            

        </div>    
    )
}




export default TodoItem