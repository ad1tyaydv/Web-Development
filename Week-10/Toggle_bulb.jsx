import { useState, createContext, useCallback, useContext } from "react"

const BulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn ] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

function App() {

  return <div>
    <BulbProvider>
      <Light />
    </BulbProvider>
  </div>
}

function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
