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
        <div className="flex justify-center items-center h-screen">
          <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
            <div className='p-2 border text-center font-bold mb-2 text-xl'>Quiz App</div>
              <div>
                <div>{questions[0].questionText}</div>
                {questions[0].answerOptions.map((option, index)=>(
                  <button className='block w-full p-2 mt-2 rounded border'>
                    {option.answerText}
                  </button>
                ))}
              </div>
          </div>
        </div>
  )
}

export default App
