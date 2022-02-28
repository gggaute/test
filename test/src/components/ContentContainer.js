import React from 'react'
import ContentHeader from './ContentHeader'
import ProgressBar from './ProgressBar'
import Question from './Question'
import Task from './Task'
import Words from './Words'
const ContentContainer = () => {
  return (
    <div className='wrapper'>
      <ContentHeader></ContentHeader>
      <ProgressBar></ProgressBar>
      <Question></Question>
      <Task></Task>
      <Words></Words>
    </div>
  )
}

export default ContentContainer
