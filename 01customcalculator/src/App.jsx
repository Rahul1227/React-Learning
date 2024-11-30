

import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  function increaseVal(){
    counter+=1;
    setCounter(counter);
    console.log("counter value is",counter);
    
  }

  function decreaseVal(){
    
    counter-=1;
    if(counter<0){
      counter=0;
     
    }
    setCounter(counter);
    // not allowing negative values
    
    
  }

  let [multiplier, setMultiplier]=useState(1);
  function increaseMultiplier(){
    setMultiplier(multiplier+1);
  }

  function decreaseMultiplier(){
    setMultiplier(multiplier-1);
  }

  function multiply(){
    setCounter(multiplier*counter);
    
  }
 

  return (
    <>
      <h2>Value : {counter}</h2>
      <button onClick={increaseVal}>IncreaseValue</button>
      <br/><br/>
      <button onClick={decreaseVal}>DecreaseValue</button>
      <br/><br/>
      <button onClick={multiply}>Mul with {multiplier}</button>
      <h5>Multiplier: {multiplier}</h5>
      <button onClick={increaseMultiplier}>IncreaseMultiplier</button>  <button onClick={decreaseMultiplier}>DecreaseMultiplier</button>
      
      
        
    </>
  )
}

export default App
