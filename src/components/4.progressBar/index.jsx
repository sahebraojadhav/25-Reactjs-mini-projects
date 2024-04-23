function StepProgressBar({ steps, activeSteps, setActiveSteps }) {
  function handlePreviousStep() {
    setActiveSteps((prevStep) => Math.max(prevStep - 1, 0));
  }

  function handleNextStep() {
    setActiveSteps((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  }

  function calculateCrurrenStepsWidth() {
    const width = `${(100 / (steps.length - 1)) * activeSteps}%`;
    console.log(width, steps.length, activeSteps);
    return width;
  }

  return (
    <div>
      <div className="steps">
        {steps && steps.length > 0
          ? steps.map((stepItem, index) => <div className={`step ${index <= activeSteps ? 'active' :''}`} style={{width :calculateCrurrenStepsWidth()}} key={index}>{stepItem}</div>) 
          : null}
      </div>
      <div className="step-button-wrapper">
          <button style={{color:"black"}} disabled={activeSteps===0} onClick={handlePreviousStep}>Previous</button>
          <button  style={{color:"black"}} disabled={activeSteps===steps.length-1} onClick={handleNextStep}>Next</button>
      </div>
    </div>
  );
}

export default StepProgressBar;
