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
    // first clicked word
    if (previousClickedWord === '') {
      setSentence(sentence.map((w) => ((w === missingWord)) ? w = clickedWord : w = w))
      setWords(words.filter((word) => word !== clickedWord))
    }
    else {
      setSentence(sentence.map((w) => ((w === previousClickedWord)) ? w = clickedWord : w = w))
      setWords([...words.filter(word => word !== clickedWord), previousClickedWord])
    }
    setPreviousClickedWord(clickedWord)
  }

  const [previousClickedWord, setPreviousClickedWord] = useState('')

  const checkAnswer = () => {
      if (sentence.includes(missingWord)) {
        var answer = true
      }
      else {
        var answer = false
      }
    console.log(answer)
  }

  const question = 'Hvilket ord mangler?'

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
    "familie",
    'bor',
    'i',
    'Eritrea'
  ])

  const missingWord = 'familie'
  
  return (
    <div className='wrapper'>
      <ContentHeader></ContentHeader>
      <ProgressBar></ProgressBar>
      <Question question={question}></Question>
      <Task missingWord={missingWord} sentence={sentence}></Task>
      <Words onClick={onClickedWord} words={words} missingWord={missingWord}></Words>
      <CheckAnswer onClick={checkAnswer}></CheckAnswer>
    </div>
  )
}

export default ContentContainer
