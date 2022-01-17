import React from 'react'
import classes from './title.module.css'

const Title = ({value}) => {
  
  return (
    <h2 className={classes.title}>
      {value.toUpperCase()}
      </h2>
  )
}

export default Title
