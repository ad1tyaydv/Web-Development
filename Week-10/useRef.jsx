import { useRef, useState } from 'react';


function App() {
  
  function focusOnInput() {
    inputRef.current.focus();
  }

  return <div>
    Sign up
    <input ref={inputRef} type={"text"}></input>
    <input type="text"></input>
    <button onClick={focusOnInput}>Submit</button>
  </div>
}

export default App
