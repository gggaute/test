import React from 'react'

const Task = ({ sentence, missingWord }) => {
  return ( 
    <div className='task'>
      {sentence.map((word) => (word !== missingWord ? <p> {word} </p> : <p className='empty'> {word} </p>))}
    </div>
  )
}

export default Task
