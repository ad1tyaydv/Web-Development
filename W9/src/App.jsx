import { useState } from "react";

let started = false;
let intervalId = null;

function App() {
  const [count, setCount] = useState(0);

  function startClock() {
    if(!started) {
        started = true;
        intervalId = setInterval(function() {
        setCount(function(currentValue) {
          return currentValue + 1;
        });
      }, 1000);
    }
  }cc

  function resetClock() {
    setCount(0);
    clearInterval(intervalId);
    started = false;
    intervalId = null;
  }

  return (
    <div>
      {count}
      <br/>
      <button onClick={startClock}>Start Timer</button>
      <button onClick={resetClock}>Reset Timer</button>
  </div>
  )
}

export default App