import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Task = ({tasks,onDelete,onToggle}) => {
  return (
    <div 
    className={`task ${tasks.reminder ? 'reminder': ''} `} 
    onDoubleClick={()=>onToggle(tasks.id)}>
        <h1>{tasks.text} <FaTimes
        onClick={()=>onDelete(tasks.id)}
         style={{color:'red',cursor:'pointer'}}
         
         /></h1> 
    <p>{tasks.day}</p>
    </div>
  )
}



export default Task;
