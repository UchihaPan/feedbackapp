import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback,deletetodo}) {
  //
    if(feedback.length === 0 )
    return(<p>No feedback</p>)
  return (
    <div className='feedback-list'>{
       feedback.map((item)=>(<FeedbackItem key={item.id} item={item} deletetodo={deletetodo}/>)
            
        )
    }</div>
  )
}

export default FeedbackList