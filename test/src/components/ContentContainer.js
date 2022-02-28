import React from 'react'
import ContentHeader from './ContentHeader'
import ProgressBar from './ProgressBar'
import Question from './Question'
import Task from './Task'
import Words from './Words'
import { useState } from 'react'
import CheckAnswer from './CheckAnswer'


const ContentContainer = () => {

  const onClickedWord = (clickedWord) => {
    console.log("click", clickedWord);
      //foreløpig gjøres sjekken etter riktig svar her. skal vel være sånn at man trykker sjekk svar
      setSentence(sentence.map((w) => w === missingWord ? w = clickedWord : w = w))
      setWords(words.filter((word) => word !== clickedWord))
  }

  const checkAnswer = () => {
    console.log("check answer")
  }

  const [words, setWords] = useState(['familie',
    'har',
    'fornøyd',
    'leilighet',
    'mange',
    'med',
  ])

  const [sentence, setSentence] = useState([
    'Yosef',
    'sin',
    'familie',
    'bor',
    'i',
    'Eritrea'
  ])

  const [missingWord, setMissingWord] = useState('familie')

  return (
    <div className='wrapper'>
      <ContentHeader></ContentHeader>
      <ProgressBar></ProgressBar>
      <Question></Question>
      <Task missingWord={missingWord} sentence={sentence}></Task>
      <Words onClick={onClickedWord} words={words} missingWord={missingWord}></Words>
      <CheckAnswer onClick={checkAnswer}></CheckAnswer>
    </div>
  )
}

export default ContentContainer
