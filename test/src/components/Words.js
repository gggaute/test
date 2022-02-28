import React, { createElement } from 'react'
import Word from './Word'

const Words = ({ onClick, words, missingWord }) => {
  return (
    <div className='word-grid'>
      {
        words.map((word) => (<Word word={word} missingWord={missingWord} onClick={onClick}></Word>))
      }
    </div>
  )
}

export default Words
