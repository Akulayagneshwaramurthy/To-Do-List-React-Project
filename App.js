import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [task,setTask] = useState("");
  const [todo,setTodo] = useState([]);
  const addtask = (e) =>{
    e.preventDefault();
    if(task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    const newTodo = [...todo, task];
    setTodo(newTodo);
    setTask("");
  }
  const taskdelete = (index) =>{
    const newTodo = todo.filter((_,i) => i !== index);
    setTodo(newTodo);
  }
  const taskedit = (index) =>{
    const newTask = prompt("Edit your task:", todo[index]);
    const newTodo = [...todo];
      newTodo[index] = newTask;
      setTodo(newTodo);
  }
  return (
   <>
    <h2 className='text-center mt-5'>To-Do-List</h2>
    <form className='input-group w-50 p-3 text-center mx-auto' onSubmit={addtask}>
      <input type='text' className='form-control' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add a new task...' />
      <button className='btn btn-primary' type='submit'>Add Task</button>
    </form>
    <div className='mt-3 w-50 p-3 mx-auto'>
      {todo.map((item,index) => (
        <h4 className='d-flex w-100 p-3 bg-' key={index}>{item}
        <div className='d-flex justify-content-end w-100'>
        <button type="button" className="btn btn-success btn-sm mx-2" onClick={() => taskedit(index)}>Edit</button>
        <button type='button' className='btn btn-danger btn-sm' onClick={() => taskdelete(index)}>Delete</button>
        </div>
        </h4>
      ))}
    </div>
   </>
  );
}

export default App;
