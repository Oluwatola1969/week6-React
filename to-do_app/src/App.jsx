import { useState } from "react"
import React from "react"



function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

   function handleInputChange(e){
    setNewTask(e.target.value);
   }

   function addNewTask(){
    if(newTask === ''){
      alert('Field cannot be empty')
    }

    if(newTask.trim() !== ''){
      setTasks(prevTasks => [...prevTasks, newTask ])
      setNewTask('')
    }
   }

   function deleteTask(index){
    const updatedTask= tasks.filter((element, i)=> i !== index)
    setTasks(updatedTask)
   }

  return (
    <div className="container">
      <div className="list-card">
     <h1>To-do List</h1>
     <div>
      <input type="text" id="input-text" placeholder="Enter task"
      value={newTask} onChange={handleInputChange}/>
      <button onClick={() => addNewTask()}
      >Add</button>
     </div>

     <ol className="list">
      {tasks.map((task, index) =>
        <li key={index} className="task-list">
          <span>{task}</span>
          <button onClick={()=>{deleteTask(index)}} className="btn-del">
            x
          </button>
        </li>
      )}
     </ol>
     </div>
    </div>
  )
}

export default App
