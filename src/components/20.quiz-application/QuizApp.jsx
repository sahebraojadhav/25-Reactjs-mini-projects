import React, { useState } from 'react'
import './quisapp.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import Favorite from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRight from "@mui/icons-material/ArrowRight";
import CameraIcon from "@mui/icons-material/Camera";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Question from './Question';
import { margin } from '@mui/system';

function QuizApp() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    
    const [isClicked,setIsClicked]=useState(null);
    const[answer,setAnswer]=useState(null);
    const[optionClicked,setOptionClicked]=useState(false)
    const[score,setScore]=useState(0);
    const[nextButtonAllowed,setNextButtonAllowed]=useState(true);
    const[prevButtonAllowed,setPrevButtonAllowed]=useState(true)

    const mcqQuestions=[ {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "CH4"],
        correctAnswer: "H2O"
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Jane Austen"],
        correctAnswer: "Harper Lee"
      },
      {
        question: "Choose any random things?",
        options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Jane Austen"],
        correctAnswer: "Harper Lee"
      },
      {
        question: "Best country in the world?",
        options: ["India", "Pak", "France", "Usa"],
        correctAnswer: "India"
      }
    ];

    function onPrevClick(e){
      console.log(e.target.value);
      console.log("previous clicked");
      if(currentQuestion>0){
        setCurrentQuestion(currentQuestion-1);
        resetState();
      }
      
    }

    function onNextClick(){
      if(currentQuestion<mcqQuestions.length-1)
      {
        setCurrentQuestion(currentQuestion+1);
      }
      else{
        setNextButtonAllowed(false)
        setCurrentQuestion(currentQuestion+1);
      }
      resetState();
      //console.log(currentQuestion);
      //setAnswer(null);
      //setIsClicked(null)
      //setOptionClicked(null)
    }

    function resetState(){
      setAnswer(null);
      setIsClicked(null);
      setOptionClicked(false)
    }

    function handleIconClick(){
      console.log("clicked")
    }

    function divClicked(option,idx){
      console.log("div clikced");
      setIsClicked(idx);
      setOptionClicked(true);
      console.log(option);
      if( mcqQuestions[currentQuestion].correctAnswer===option){
        console.log("your correct");
        setAnswer(true);
        setScore(score+1);
      }
      else{
        console.log("you are wrong");
        setAnswer(false);
        //setOptionClicked(false);
      }
      console.log(optionClicked,answer)
    }

  return (
    <div className='main-conatiner'>
      <h1>This is second Quiz Application</h1>
      {currentQuestion < mcqQuestions.length? (
      <div className="question-conatiner">
        <h3 >{`Question No: ${currentQuestion+1}`}</h3>
        <p className='quest'>{mcqQuestions[currentQuestion].question}</p>
        { 
        mcqQuestions[currentQuestion].options.map((option,idx)=>(
            <div key={idx} 
            className={`option-div ${(isClicked===idx && optionClicked) ? (answer) ? "true-selected" : "false-selected":'' }`} 
            onClick={!optionClicked?()=>divClicked(option,idx):null} >
              <div className="single-option">
              {optionClicked && isClicked===idx ?(answer?
              <ThumbUpAltIcon/>:<ThumbDownIcon/>)
                :null 
            } {idx+1}.{option}
              </div>
            </div>
        ))
     }
      </div>
   ) :
   (
    <div className={score<=3? "score" :"score-grediant"}>
      <h2>You have scored</h2>
      <h2>{score}</h2>
    </div>

    )}
      <div className="btn-container">
          <Button variant="contained" sx={{width:100,height:35}} onClick={onPrevClick} disabled={currentQuestion<=0}>prev</Button>
          <Button variant="contained" sx={{width:100,height:35}} onClick={onNextClick} >Neaxt</Button>

      </div>
    </div>
  )
}

export default QuizApp
