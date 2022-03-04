
import { useState } from 'react';
import './App.css';
import AddTask from './componnet/AddTask';
import Header from './componnet/Header';
import Tasks from './componnet/Tasks';

function App() {


  const a =[
    
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
  

]

 const [tasks,setTasks] =useState(a)


 //delete verhalten

 const deleteTask =(id)=>{
   setTasks(tasks.filter((task)=>task.id !==id))
 }

//errian daran
 
const ToggleReminder = (id) =>{
  setTasks(tasks.map((tasks)=>
  tasks.id === id ?{
    ...tasks,reminder : !tasks.reminder
  }:tasks
  ))
}


//ADD


const addTask=(task) =>{
  const id = Math.floor(Math.random()*1000)+1
  const newsTask ={id,...task}
  setTasks([...tasks,newsTask])
}

  return (
    <div className="container">
<Header 

/>
<AddTask onAdd={addTask}/>

{
  tasks.length> 0 ? (
<Tasks tasks = {tasks}
onDelete={deleteTask}
onToggle={ToggleReminder}
/>

    
  ):('No Taksk To Show')
}



    </div>
  );
}

export default App;
