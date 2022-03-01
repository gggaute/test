import React from 'react'

const Word = ({ word, missingWord, onClick }) => {
  return (
    <div className='wordBox' onClick={() => onClick(word)}>
        <p>{word}</p>
    </div>
  )
}

export default Word
