import { useState } from "react";
import StepProgressBar from ".";
import "./progress.css"

function StepProgressBarTest() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["step 1", " step 2", "step 3", "step 4"];


return (
  <div className="step-progess-bar-container">
    <h1>
      Step progress Bar
    </h1>
    <StepProgressBar setActiveSteps={setActiveStep} steps={steps} activeSteps={activeStep} />
 
  </div>
);
}

export default StepProgressBarTest;