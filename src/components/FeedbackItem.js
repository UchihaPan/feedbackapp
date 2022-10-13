import React, { useState } from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item,deletetodo}) {


  return (
    <Card>
          <div className="num-display">
            {item.rating}
        </div>
        <button  onClick={() => deletetodo(item.id)} className="close"><FaTimes /></button>
        <div className="text-display">{item.text}</div>
    </Card>
      
  )
}

export default FeedbackItem