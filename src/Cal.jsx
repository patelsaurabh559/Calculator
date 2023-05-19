import React, { useState } from 'react'

export default function Cal() {
    const [result, setResult] = useState([]);


    const handleClick = (event) => {
        setResult(result.concat(event.target.value))
        setResult(result+event.target.value)
    }
    const handleClear = () => {
        setResult("");
    }
    const handleCalculator = () => {
        try {
            setResult(eval(result).toString())
        }
        catch (err) {
            setResult("ERROR")
        }
    }  
    const handleBackSpace = () => {
        setResult(result.slice(0, -1))
    }

    return (
        <>
            <div className='wrp container'>
            <h1 >My Calculator</h1>
                <div className="">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="text" value={result} className="txt txt-size form-control bg-secondary-subtle" placeholder='' id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div>
                    {/* <button type="button" className="btn-size-1 btn btn-outline-primary btn-lg" value="">Check</button>
                    <button type="button" className="btn-size-1 btn btn-outline-primary ms-2 btn-lg" value="">Correct Delete</button> */}
                </div>

                <div className='mt-2'>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="1" onClick={handleClick}>1</button>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="2" onClick={handleClick}>2</button>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="3" onClick={handleClick}>3</button>
                    <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="-" onClick={handleClick}>-</button>
                    <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="*" onClick={handleClick}>*</button>

                </div>

                <div className='mt-2'>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="4" onClick={handleClick}>4</button>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="5" onClick={handleClick}>5</button>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="6" onClick={handleClick}>6</button>
                    <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="+" onClick={handleClick}>+</button>
                    <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="/" onClick={handleClick}>/</button>
                </div>

                <div className='mt-2'>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="1" onClick={handleClick}>1</button>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="2" onClick={handleClick}>2</button>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="3" onClick={handleClick}>3</button>
                    <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="%" onClick={handleClick}>%</button>
                    <button type="button" className="btn-size-2 btn btn-outline-success bg-success-subtle btn-lg ms-2" value="=" onClick={handleCalculator}>=</button>
                </div>

                <div className='mt-2'>
                    <button type="button" disabled={result.length === 0 ? true : false} className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="0" onClick={handleClick}>0</button>
                    <button type="button" disabled={result.length === 0 ? true : false} className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="00" onClick={handleClick}>00</button>
                    <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="." onClick={handleClick}>.</button>
                    <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="" onClick={handleBackSpace}>Del</button>
                    <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="" onClick={handleClear}>Clr</button>
                </div>
            </div>
        </>
    )
}


/* <div className='top-1'> */ 
/* <button type="button" className=" btn-size btn btn-primary btn-lg">Large button</button>
<button type="button" className="btn-size btn btn-primary btn-lg ms-1">Large button</button> */
/* 
{/* </div> */
// { /* <div className="d-grid gap-2 col-6 mx-auto">
// <button className="btn btn-primary " type="button">Button</button>
// <button className="btn btn-primary" type="button">Button</button>
// </div> */ 