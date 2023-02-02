import React, {useState} from "react"
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  
  const clickHandle = () => {
    setCounter(counter + 1)
  }
  
  return (
    <div className="App">
      <h2>Times Clicked  {counter}</h2>
      <button onClick={clickHandle}>Click Me!</button>
    </div>
  );
}

export default App;
