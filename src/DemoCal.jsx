import React, { useState, useRef, useEffect } from 'react'

export default function DemoCal() {
  const [result, setResult] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e)
  {
    setResult(result + e.target.name);
  }

  function handleBackSpace(){
    setResult(result.slice(0, -1));
  }

  function handleClear()
  {
    setResult("");
  }

  function handleCalculate()
  {
      try{
        setResult(eval(result).toString());
      }
      catch (error)
      {
        setResult ("ERROR");
      }
  }

  return (
    <>
      <div className='wrp container'>
        <h1 >My Calculator</h1>
        <div className="">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input type="text" value={result} ref={inputRef} className="txt txt-size form-control bg-secondary-subtle" placeholder='' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div>
          {/* <button type="button" className="btn-size-1 btn btn-outline-primary btn-lg" value="">Check</button>
                    <button type="button" className="btn-size-1 btn btn-outline-primary ms-2 btn-lg" value="">Correct Delete</button> */}
        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="1" onClick={handleClick} name='7'>7</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="2" onClick={handleClick} name='8'>8</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="3" onClick={handleClick} name='9'>9</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="-" onClick={handleClick} name='-'>-</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="*" onClick={handleClick} name='*'>*</button>

        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="4" onClick={handleClick} name='4'>4</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="5" onClick={handleClick} name='5'>5</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="6" onClick={handleClick} name='6'>6</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="+" onClick={handleClick} name='+'>+</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="/" onClick={handleClick} name='/'>/</button>
        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="1" onClick={handleClick} name='1'>1</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="2" onClick={handleClick} name='2'>2</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="3" onClick={handleClick} name='3'>3</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="%">%</button>
          <button type="button" className="btn-size-2 btn btn-outline-success bg-success-subtle btn-lg ms-2" value="=" onClick={handleCalculate}>=</button>
        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="0" onClick={handleClick} name='0'>0</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="00" onClick={handleClick} name='00'>00</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="." onClick={handleClick} name='.'>.</button>
          <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="" onClick={handleBackSpace}>Del</button>
          <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="" onClick={handleClear}>Clr</button>
        </div>
      </div>
    </>
  )
}
