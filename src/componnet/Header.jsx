import React from 'react'
import Button from './Button';



const Header=({title}) =>{
const onClick =()=>{
   console.log('click')
   
    
}


    return(
        <div className='header'>
        <h1> {title}</h1>
        <Button
        onClick={onClick}

        text='Add'
        color='red'
        
        />
        
        </div>
    )
}

Header.defaultProps ={
    title: 'Task Test'
}






export default Header;