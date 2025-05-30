import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return <div>
    common top bar for all Routes
    <BrowserRouter>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
    NEET program for class 11th
  </div>
}

function Class12Program() {
  return <div>
    NEET program for class 12th
  </div>
}

export default App
