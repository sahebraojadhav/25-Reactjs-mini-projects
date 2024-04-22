import CountdownTimmer from ".";

function CountdownTimmerTest() {
   
  function handleTimeFinish() {}

  return (
    <div className="countdown-timmer-container">
      <h1>Countdown Timmer</h1>
      <CountdownTimmer initalTime={300} onTimeFinish={handleTimeFinish} />
    </div>
  );
}

export default CountdownTimmerTest;
