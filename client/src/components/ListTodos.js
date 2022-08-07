import React, {Fragment, useEffect, useState} from 'react'

import EditTodo from './EditTodo';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    // Delete a todo
    const deleteTodo = async (id) =>{
        const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,
        {
            method: "DELETE"
        });
        setTodos(todos.filter(todo => (todo.todo_id !== id)));
    }

    // Get list of todos
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    },[]);
    console.log(todos)
  return (
    <Fragment>
        <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Decription</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {todos.length? (todos.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td>< EditTodo todo={todo} /></td>
            <td>
                <button className='btn btn-danger' 
                onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
      ))):
        <tr><td>Nothing in your todos yet</td></tr>}
      
      
    </tbody>
  </table>
    </Fragment>
  )
}

export default ListTodos