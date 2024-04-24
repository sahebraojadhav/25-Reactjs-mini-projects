import { useState } from "react";

function Tooltip({ children, content, delay }) {
  let timeout;
  const [isVisible, setIsVisble] = useState(false);

  function handleTooltip() {
    timeout = setTimeout(() => {
      setIsVisble(true);
    }, delay || 500);
  }

  function handleHideTooltip(){
    clearTimeout(timeout);
    setIsVisble(false);
  }
 
  return (
    <div>
      <div
        className="tooltip-container"
        onMouseEnter={() => handleTooltip}
        onMouseLeave={() => handleHideTooltip}
      >
        {children}
        {isVisible ? <div className="tooltip">{content}</div> : null}
      </div>
    </div>
  );
}

export default Tooltip;
