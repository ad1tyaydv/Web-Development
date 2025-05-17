// Creating a onclick button using react

import { useState } from "react";
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);  // hook - anything that starts with use is known as a hook

  function onclickHandler() {
    setCount(count + 1);
  }
    
  return (
    <div>
      <button id="btn" onClick={onclickHandler}>Counter {count}
      </button>
    </div>
  );
}
