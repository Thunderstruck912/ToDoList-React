import React,{useState,useEffect} from 'react'
import TaskForm from '../UI/Form/TaskForm/TaskForm'
import InputForm from '../UI/Form/InputForm/inputForm'
import Title from '../UI/Title/title'

const TaskList = ({priority}) =>{
const [tasks,setTasks] = useState([...JSON.parse(localStorage.getItem('Task_'+priority))||[]])

useEffect(()=>localStorage.setItem('Task_'+priority, JSON.stringify(tasks)),[tasks,priority])

const createTask= (newTask)=> {
setTasks([newTask,...filterTask()])
}

const removeTask=(task)=>{
  setTasks(filterTask().filter(elem=>elem.id !== task.id))
}

const taskComplete= (task)=>{
  setTasks([...tasks.map((elem)=>
  elem.id===task.id ? {...elem,checked:!elem.checked}:{...elem})])
}

const filterTask = ()=>[...tasks.filter(elem=>elem.checked===false),...tasks.filter(elem=>elem.checked===true)]

  return (
      <>
      <Title value={priority}/>
      <InputForm create={createTask} priority={priority}/>
      <TaskForm tasks={tasks} remove={removeTask} complete={taskComplete}/>
      </>
  )
}

export default TaskList 
