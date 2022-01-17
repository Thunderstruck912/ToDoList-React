import React from 'react'
import classes from './TaskForm.module.css'

const TaskForm = ({tasks,remove,complete}) => {
  return (
    <>
    {tasks.map((item,index) =>
      <form className={item.checked?`${classes.form_active}`:`${classes.form}`} key={index} >
      <input type="checkbox" className={classes.input_checkbox} onChange={() =>complete(item)} checked={item.checked}/>
      <p >{item.name}</p>
      <input type='button' onClick={() =>remove(item)}  className={classes.input_btn}/>
    </form>
    )}
  </>
  )
}

export default TaskForm

