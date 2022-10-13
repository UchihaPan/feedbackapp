import Header from "./components/Header";
import PropTypes from 'prop-types'
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./components/Data/Feedbackdata";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback,setfeedback]=useState(FeedbackData)

  function deletetodo(id){
    setfeedback(feedback.filter(item =>
       item.id !== id))
  }

  return (
    <>
    <Header text='TodoList'/>
    <div className="container">
<FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} deletetodo={deletetodo} />
    </div>
    
    </>
  );
}

export default App;
