import React, {useState} from 'react'
import './App.css' 

export default function App() {

  const [result, setResult] = useState("")

  const handleClick = (e)=>{
    setResult(result.concat(e.target.name))
  }

  const clear = ()=>{
    setResult("")
  }

  const calculate = ()=>{
    setResult(eval(result))
  }
  return (
    <>
    <div className='container'>
    <div className='calculator'>
      <div className='heading'><h1>Calculator</h1></div>
      
      <div className='row'>
      <input id='inputEle' type="text" value={result}/>
      <button id='clear-btn' className='btn-operators' onClick={clear}> C </button>
      </div>
      

      <div className='row'>
      <button name="1" className='btn-nums' onClick={handleClick}>1</button>
      <button name="2" className='btn-nums' onClick={handleClick}>2</button>
      <button name="3" className='btn-nums' onClick={handleClick}>3</button>
      <button className='btn-operators' name="/" onClick={handleClick}>/</button>
      </div>

      <div className='row'>
      <button name='4' className='btn-nums' onClick={handleClick}>4</button>
      <button name='5' className='btn-nums' onClick={handleClick}>5</button>
      <button name='6' className='btn-nums' onClick={handleClick}>6</button>
      <button className='btn-operators' name='-' onClick={handleClick}>-</button>
      </div>

      <div className='row'>
      <button name='7' className='btn-nums' onClick={handleClick}>7</button>
      <button name='8' className='btn-nums' onClick={handleClick}>8</button>
      <button name='9' className='btn-nums' onClick={handleClick}>9</button>
      <button className='btn-operators' name='+' onClick={handleClick}>+</button>
      </div>

      <div className='row'>
      <button name='.' className='btn-nums' onClick={handleClick}>.</button>
      <button name='0' className='btn-nums' onClick={handleClick}>0</button>
      <button id='result-btn' className='btn-nums' onClick={calculate}>=</button>
      <button className='btn-operators' name='*' onClick={handleClick}>*</button>
      </div>
      
    </div>

    </div>
    
    </>
  )
}
