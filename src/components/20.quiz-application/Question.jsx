import React from 'react'

function Question({mcqQuestions,currentQuestion}) {
    <h3 >{`Question No: ${currentQuestion+1}`}</h3>
    { 
        mcqQuestions[currentQuestion].options.map((option,idx)=>(
            <div key={idx} className={`option-div ${(isClicked===idx && optionClicked) ? (answer) ? "true-selected" : "false-selected":'' }`} onClick={!optionClicked?()=>divClicked(option,idx):null} >
              <div className="single-option">
              {optionClicked && isClicked===idx ?(answer?
              <ThumbUpAltIcon/>:<ThumbDownIcon/>)
                :null
            } {idx+1}.{option}
              </div>
            </div>
        ))
     }
}


export default Question;
