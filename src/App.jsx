import React, { useState } from 'react'

const questions =[
    {
      questionText: 'What is the capital of France?',
      answerOptions:[
        {answerText: 'New York', isCorrect: false},
        {answerText: 'London', isCorrect: false},
        {answerText: 'Paris', isCorrect: true},
        {answerText: 'Dublin', isCorrect: false},
      ],
    },
    {
      questionText: 'Who is Tesla CEO',
      answerOptions:[
        {answerText: 'Elon Musk', isCorrect: true},
        {answerText: 'Bill Gates', isCorrect: false},
        {answerText: 'Warren Buffett', isCorrect:false},
        {answerText: 'Jimmy Page', isCorrect: false},
      ],
    },
    {
      questionText: 'Who is Capital of India',
      answerOptions:[
        {answerText: 'Delhi', isCorrect: true},
        {answerText: 'Cairo', isCorrect: false},
        {answerText: 'Jakarta', isCorrect:false},
        {answerText: 'Mumbai', isCorrect: false},
      ],
    },

];


function App() {
  
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answered, setAnswered] = useState(false)
const [selectedAnswer, setSelectedAnswer] = useState(null)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)

const handleAnswerOption = (index, isCorrect) =>{
  setAnswered(true)
  setSelectedAnswer(index)
  if(isCorrect){
    setScore(score + 1)
  }

}

const nextQuestion = () => {
    setAnswered(false)
    setSelectedAnswer(null)
    const nextQuestion = currentQuestion+1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setShowScore(true)
    }
}

  return (
        <div className="flex justify-center items-center h-screen">
          <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
            <div className='p-2 border text-center font-bold mb-2 text-xl'>Quiz App</div>
              {showScore ? <div>
                You scored {score} of {questions.length}
                </div> :
              
                
              <div>
                <div>{questions[currentQuestion].questionText}</div>
                {questions[currentQuestion].answerOptions.map((option, index)=>(
                  <button 
                    onClick={() => handleAnswerOption(index, option.isCorrect)}
                    className={`block w-full p-2 mt-2 rounded border ${
                        answered ?
                          option.isCorrect ?
                          "bg-green-200"
                          : selectedAnswer === index ?
                          "bg-red-200"
                          : ""
                        :""
                    }`}>
                    {option.answerText}
                  </button>
                ))}
                <button className={`${answered ? "bg-green-500" : "bg-red-300"} block w-full bg-green-500 text-white p-2 rounded`}
                disabled = {answered ? "" : "disabled"}
                onClick={nextQuestion}>Next Question</button>
                <p className="text-center text-gray-400 text-sm">Questions {currentQuestion + 1} of {questions.length}</p>
              </div>
              }
          </div>
        </div>
  )
}

export default App
