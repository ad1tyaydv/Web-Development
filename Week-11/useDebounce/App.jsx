import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { usePrev } from "./hooks/use-prev";


function useDebounce(origionalFn) {
  const currentClock = useRef();
  
  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(origionalFn, 200);
  }

  return fn
}

function App() {
    function sendDataToBackend() {
      fetch("api.amazon.com/search/");
    }

    const debouncedFn = useDebounce(sendDataToBackend)

    return (
        <>
          <input type="text" onChange={debouncedFn}></input>
        </>
    );
}

export default App;
