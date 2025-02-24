import { useState } from "react";
import Result from "./Result";
import toast from "react-hot-toast";

function Test({quiz}) {
  const {title, color, icon, questions} = quiz[0];
  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabeled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);


  function handleSubmit(e) {
    e.preventDefault()
    const correctAnswer = questions[questionIndex].answer;
    if(selectedAnswer == null) {
      toast.error("PLease choose a answer")
    } else {
      if(selectedAnswer == correctAnswer) {
        setAnswerStatus('correct')
        setCorrectAnswerCount(correctAnswerCount + 1)
      } else {
        setAnswerStatus('incorrect')
      }
      setShowNextButton(true)
      setStatusDisabled(true)
    }
  }

  function handleNextButton() {
    setQuestionIndex(questionIndex + 1)
    setAnsweredQuestions(answeredQuestions + 1)
    setSelectedAnswer(null)
    setShowNextButton(false)
    setAnswerStatus(null)
    setStatusDisabled(false)
  }

  if(questionIndex == questions.length) {
    toast.success("Congratulations", {
      icon: '🎉',
    })
    return <Result title={title} color={color} icon={icon} correctAnswerCount={correctAnswerCount} questions={questions}/>
  }

  return (
    <div className="test-container">
      <div className="test-content">
        <p className="test-description">
          Question {answeredQuestions} of {questions.length}
        </p>
        <h2 className="test-title">
          {questions[questionIndex].question}
        </h2>
        <div className="test-proccess-container">
          <div className="test-proccess" style={{width: `${answeredQuestions * questions.length}%`}}></div>
        </div>
      </div>
      <div className="test-questions">
        <form onSubmit={handleSubmit}>
          <ul className="test-list">
            {questions[questionIndex].options.map((item, index) => {
              let alphabet = String.fromCharCode(65 + index);
              let className = "";
              if(answerStatus == 'correct' && item == selectedAnswer) {
                className = 'correct'
              } else if (answerStatus == 'incorrect'){
                if( item == selectedAnswer) {
                  className = 'incorrect'
                }
                if(item == questions[questionIndex].answer) {
                  className = 'correct'
                }
              }
              return (
                <li key={item} >
                <label className={`test-label ${className}`}>
                  <span className="test-letter">{alphabet}</span>
                  <input disabled={statusDisabeled} type="radio" name="option" onChange={() => setSelectedAnswer(item)}/>
                  <span className="test-text">{item}</span>

                  {/* icons */}
                  <img src="../../public/assets/icon-correct.svg" alt="icon" className="test-icon-correct" width='40' height={40}/>
                  <img src="../../public/assets/icon-incorrect.svg" alt="icon" className="test-icon-incorrect" width='40' height={40}/>
                </label>
              </li>
              )
              })}
          </ul>
          {!showNextButton && <button className="btn test-btn">Submit Question</button>}
          {showNextButton && <button onClick={handleNextButton} className="btn test-btn">{questions.length == answeredQuestions ? 'Finish' : 'Next Question'}</button>}
        </form>
      </div>
    </div>
  )
}

export default Test