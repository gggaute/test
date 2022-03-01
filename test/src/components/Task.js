import React from 'react'

const Task = ({ sentence, missingWord }) => {
  return ( 
    <div className='task'>
      {sentence.map((word) => (<p> {word} </p>))}
    </div>
  )
}

export default Task
