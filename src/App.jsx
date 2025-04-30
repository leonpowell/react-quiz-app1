import React from 'react'

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

  return (
        <div className="App">
          <div>
            <div>Quiz App</div>
              <div>
                <div>{questions[0].questionText}</div>
                {questions[0].answerOptions.map((option, index)=>(
                  <button>{option.answerText}</button>
                ))}
              </div>
          </div>
        </div>
  )
}

export default App
