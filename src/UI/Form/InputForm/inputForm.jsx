import React, {useState} from 'react'
import classes from './inputForm.module.css'

const InputForm = ({create,priority}) => {
  const [value,setValue]= useState('')

  const addTask = (e)=> { 
    e.preventDefault()
    if(value==='') return 
    let newTask = new function() {
      this.id=Date.now()
      this.name = value
      this.checked=false
      this.priority =priority
    }()
    create(newTask)
    setValue('')
  }


  return (
      <form onSubmit={addTask} className={classes.input_form}>
        <input type="text" className={classes.input_text} placeholder={priority==='high'?'Добавить важное дело':'Добавить'} onChange={(e)=>setValue(e.target.value)} value={value}/>
        <input type="button" className={classes.input_btn} onClick={addTask}/>
      </form>
  )
} 

export default InputForm
