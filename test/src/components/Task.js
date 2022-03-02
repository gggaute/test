import React from 'react'
import $ from "jquery"

const Task = ({ sentence, missingWord, missingWordIndex }) => {

  return ( 
    <div className='task'>
      {sentence.map((word, i) => (i === missingWordIndex ? <div id="wordContainer"> <p className="taskPBorder"> {word} </p> </div> : <p> {word} </p>))}
    </div>
  )
}

export default Task
