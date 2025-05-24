// // Using useState Hook
// import { useState } from "react";

// function App() {
//   return <div>
//     <b>
//       hii there
//     </b>
//     <Counter></Counter>
//   </div>
// }

// function Counter() {  // Componenet

//   const [count, setCount] = useState(0);
  
//   function increaseCount() {
//     setCount(count + 1);
//   }

//   function decreaseCount() {
//     setCount(count - 1);
//   }

//   function resetCount() {
//     setCount(0);
//   }

//   return <div>
    
//     <h1 id="text">{count}</h1>
//     <button onClick={increaseCount}>Increase count</button>
//     <button onClick={decreaseCount}>Decrease Count</button>
//     <button onClick={resetCount}>Reset Count</button>
//   </div>
// }

// export default App





// import { useState, useEffect } from "react";


// // conditional rendering 
// function App() {
//     let [counterVisible, setCountVisible] = useState(true);

//     useEffect(function() {
//       setInterval(function() {
//         setCountVisible(c => !c)
//       }, 5000);
//     }, [])

//   return <div>
//     hii
//     {counterVisible && <Counter></Counter>}
//     hello
//   </div>
// }

// // mounting, re-rendering, unmounting
// function Counter() {  // Componenet
//   const [count, setCount] = useState(0);

  
//   console.log("counter");

//   // clearInterval
//   useEffect(function() {
//     console.log("on mount");
//     let clock = setInterval(function() {
//       console.log("from inside the interval");
//       setCount(c => c + 1);
//     }, 1000);
    
//     return function() {    // doing manual cleanup ourself.
//       console.log("on unmount");
//       clearInterval(clock)
//     }
//   }, [])  // dependency array, cleanup, fetch inside useEffect

//   function increaseCount() {
//     setCount(count + 1);
//   }

//   return <div>
//     <h1 id="text">{count}</h1>
//     <button onClick={increaseCount}>Increase Count</button>
//   </div>
// }

// export default App





import { useState, useEffect } from "react";

function App() {

  return <div>
    <Counter/>
  </div>
}

function Counter() {

  useEffect(function() {
    console.log("render");

    return function() {
    console.log("unmount");
    }
  }, []);

  return <div>
    Counter
  </div>
}

export default App;
