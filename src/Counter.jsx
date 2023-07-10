import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    function btnPlus() {
        setCounter(count => count + 1)
    }
    function btnMinus() {
    if(counter > 0){
        setCounter(count => count - 1)}
    }
    function btnReset() {
        setCounter(0)
    }

  return (
    <div style={{border: '1px solid', width: '200px', height:'200px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', justifyContent: 'space-between', backgroundColor:'bisque', borderRadius:'20px'}}>
        <button onClick={btnPlus}>+</button>
        <h1 >{counter} </h1>
        <button onClick={btnMinus}>-</button>
        <button onClick={btnReset}>Reset</button>
    </div>
  )
}

export default Counter