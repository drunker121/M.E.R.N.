import React, {useState} from 'react';
import './Todo.css';



const Todo = () => {
    const [todo , setTodo] = useState(
        {
            totask: "gym"
        }
    );

    const ondelete = (e) => {
        e.preventDefault();
        let newTodo = {todo};
        delete newTodo.totask;
        setTodo(newTodo);
    }
    
  return (
    <>
        <div className='heading'>
            <h1>TO-DO APP</h1>
        </div>
        <div className='box'>
            <div><h2 className='subhead'>Tasks:</h2></div>
            <div>
                <h3>{todo.totask} <button onClick={ondelete}>Delete</button></h3>
            </div>
        </div>
    </>
  )
}

export default Todo