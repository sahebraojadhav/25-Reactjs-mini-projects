import React, { useState } from "react";
import './quiz.css'

function QuizApplication() {
  const [selectedOption, setSelectedOption] = useState(Array(4).fill({question:null,ans:""}));
  const [tempState,setTempState]=useState('');
  const [display,setIsDisplay]=useState(false);
  const [marks,setMarks]=useState(0);
  const [isAllQuestionSelected,setIsAllQuestionSelected]=useState(false)
  const questions = [
    {
      id: 0,
      question: "who is founder of C lang?",
      option: ["bajanrne", "applio", "danis", "none"],
      answer: "danis",
    },
    {
      id: 1,
      question: "when c language created",
      option: ["1972", "1973", "1974", "1975"],
      answer: "1972",
    },
    {
      id: 2,
      question: "whcih is popular programming language",
      option: ["c", "c++", "java", "javascript"],
      answer: "javascript",
    },
    {
      id: 3,
      question: "which is most popualr technology",
      option: ["mern", "mean", "react", "angular"],
      answer: "mern",
    },
  ];

  function checkAllOptionSelected(){
    let questionCounter=0;
    selectedOption.forEach(question=>{
      console.log(question.question)
      if(question.question){
       questionCounter++;
      }
    })
    console.log(questionCounter);
    if(questionCounter===questions.length-1)
      setIsAllQuestionSelected(true);
    else 
    setIsAllQuestionSelected(false);
  }

  function handlleOptionChange(e,index) {
   checkAllOptionSelected();
   console.log(e.target.value,index);
   const updatedSelection=selectedOption.map((opt,idx)=>{
    if(idx===index)
      return{questions:index,ans:e.target.value}
    return opt;
   })
   setSelectedOption(updatedSelection);
  }

  console.log(selectedOption);
  console.log(selectedOption[0]?.ans)

  function calculateMarks(){



    setIsDisplay(true)
    let marks=0;
    for(let i=0;i<selectedOption.length;i++)
    {
      console.log(i);
      if( questions[i].answer===selectedOption[i].ans)
        marks+=1;
    } 
    console.log("marks",marks);
    setMarks(marks);

  }

  console.log(questions[0].answer);
  console.log(selectedOption[0].ans);

  return (
    <div className="quiz-main-container">
      <h1>This it quiz application</h1>
      <div className="quiz-container">
        {questions.map((item, idx) => (
          <div className="question" key={idx}>
            <span>{idx + 1}.</span>
            <span>{item.question}</span>
            <div className="options">
              {item.option.map((opt, index) => (
                <label htmlFor={opt}>
                  <input
                   className="input-field"
                    key={index}
                    type="radio"
                    value={opt}
                    checked={selectedOption[idx]?.ans===opt}
                    
                    onChange={()=>handlleOptionChange(event,idx)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
        {isAllQuestionSelected?"":"**all questions madatory"}
        <button className="submit" onClick={calculateMarks}>Submit</button>
        {
          display? `YOU have Scored ${marks}`:""
        }
      </div>
    </div>
  );
}

export default QuizApplication;
