// Creating our own hooks using custom hooks

import { useState } from "react"

// custom hook
function useCounter() {
    const [Count, setCount] = useState(0);

    function increaseCount() {
        setCount(Count + 1);
    }

    return {
        Count: Count,
        increaseCount: increaseCount
    }
}

function App() {
    const {Count, increaseCount} = useCounter();

    return <div>
        <button onClick={increaseCount}>Increase {Count}</button>
    </div>
}

export default App
