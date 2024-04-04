import './App.css'
import { useState } from 'react';


const App = () => {

  const questions = [
    {
      questionText : "What is the capital city of Karnataka.?",
      answerOptions : [
        {answerText : "Bengaluru", isCorrect : true},
        {answerText : "Mysuru", isCorrect : false},
        {answerText : "Mangaluru", isCorrect : false},
        {answerText : "Hubballi", isCorrect : false},
      ]
    },

    {
      questionText: "Which river flows through the city of Bengaluru.?",
      answerOptions : [
        {answerText : "Krishna" ,isCorrect : false},
        {answerText : "Kaveri" ,isCorrect : true},
        {answerText : "Tungabhadra" ,isCorrect : false},
        {answerText : "Godavari" ,isCorrect : false},
      ]
    },

    {
      questionText : "Which famous Indian festival is celebrated with great fervor in Mysuru, Karnataka.?",
      answerOptions : [
        {answerText : "Diwali", isCorrect : false},
        {answerText : "Dussehra", isCorrect : true},
        {answerText : "Holi", isCorrect : false},
        {answerText : "Eid", isCorrect : false},
      ]
    },

    {
      questionText : "Which national park in Karnataka is famous for its tiger population.?",
      answerOptions : [
        {answerText : "Bandipur National Park", isCorrect : true},
        {answerText : "Nagarhole National Park", isCorrect : false},
        {answerText : "Bannerghatta National Park", isCorrect : false},
        {answerText : "Anshi National Park", isCorrect : false},
      ]
    },

    {
      questionText : "Which UNESCO World Heritage Site in Karnataka is known for its intricate carvings and sculptures.?",
      answerOptions : [
        {answerText : "Gol Gumbaz", isCorrect : false},
        {answerText : "Hampi", isCorrect : true},
        {answerText : "Aihole", isCorrect : false},
        {answerText : "Badami", isCorrect : false},
      ]
    },

    {
      questionText : "Which hill station in Karnataka is known for its scenic beauty and coffee plantations.?",
      answerOptions : [
        {answerText : "Chikmagalur", isCorrect : false},
        {answerText : "Coorg", isCorrect : true},
        {answerText : "Nandi Hills", isCorrect : false},
        {answerText : "Agumbe", isCorrect : false},
      ]
    },

    {
      questionText : "Which classical dance form originated in Karnataka and is dedicated to Lord Shiva.?",
      answerOptions : [
        {answerText : "Kathakali", isCorrect : false},
        {answerText : "Kuchipudi", isCorrect : false},
        {answerText : "Bharatanatyam", isCorrect : false},
        {answerText : "Yakshagana", isCorrect : true},
      ]
    },

    {
      questionText : "Which is the largest city in terms of population in Karnataka, after Bengaluru.?",
      answerOptions : [
        {answerText : "Mysuru", isCorrect : false},
        {answerText : "Mangaluru", isCorrect : true},
        {answerText : "Hubballi", isCorrect : false},
        {answerText : "Belagavi", isCorrect : false},
      ]
    },

    {
      questionText : "Which is the highest peak in Karnataka.?",
      answerOptions : [
        {answerText : "Nandi Hills", isCorrect : false},
        {answerText : "Brahmagiri", isCorrect : false},
        {answerText : "Tadiandamol", isCorrect : false},
        {answerText : "Mullayanagiri", isCorrect : true},
      ]
    },

    {
      questionText : "Which dynasty ruled over most of Karnataka during the medieval period.?",
      answerOptions : [
        {answerText : "Chola dynasty", isCorrect : false},
        {answerText : "Hoysala dynasty", isCorrect : false},
        {answerText : "Chalukya dynasty", isCorrect : false},
        {answerText : "Vijayanagara Empire", isCorrect : true},
      ]
    },
    
  ];

  const [cq, setCq] = useState(0);
  const [score, setScore] = useState(false);
  const [res, setRes] = useState(0);
 

  const handelAnswer = (isCorrect) =>{

    if(isCorrect === true){
      setRes(res + 1);
    }


    const nQ = cq + 1;
    if(nQ < questions.length){
      setCq(nQ);
    }else{
      setScore(true);
    }
  }

  return (
    <div className="container">
      
    {score ? (
        <div className='scoreBord'>
            You Scored <span>{res}</span> out of <span>{questions.length}</span>
        </div>
    ) : (
      <>
        <div className="left">
          <div className="name">General Quiz</div>
          <div className="question-no">Question : <span>{cq + 1}/</span>{questions.length}</div>
          <div className="question"><span style={{color: 'rgba(24, 119, 242, 255)'}}>{cq + 1}.</span>{questions[cq].questionText}</div>
        </div>
        <div className="right">
          <div className="answers">
            {questions[cq].answerOptions.map((answerOptions, index) => <button key={index} onClick={() => handelAnswer(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
          </div>
        </div>
      </>
      
    )}

    </div>
  )
}

export default App
