import React from "react";
import Task from "./Task";

 const Tasks = ({tasks,onDelete,onToggle}) => {



  return (
    <div>

{
    tasks.map((tasks)=>(
        <h3 >{<Task
        key={tasks.id}
        tasks={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
        
        />}</h3>
    ))
}


    </div>
  )
}
export default Tasks;
