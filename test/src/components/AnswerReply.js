import React from 'react'

const AnswerReply = () => {
  return (
    <div id="box">
        <button id="checkAnswer">Sjekk svaret</button>
        <div id="resultatBox">
            <div id="resultatText">{"Riktig! :)"}</div>
            <button id="goToNext">-></button>
        </div>
    </div>
  )
}

export default AnswerReply