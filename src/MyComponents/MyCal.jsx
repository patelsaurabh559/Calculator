import React, { useState, useEffect } from 'react'

export default function MyCal() {
  
    // const [result, setResult] = useState([]);

    // const[response,setResponse] = useState("");

    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

//     function inputNum(e)
//   {
//     setResult(result + e.target.name);
//   }

const inputNum = (e) => {
    if (curState.includes(".") && e.target.name === ".") return;

    if (total) {
      setPreState("");
      // setResponse('')
    }

    curState
      ? setCurState((pre) => pre + e.target.name)
      : setCurState(e.target.name);
    setTotal(false);

    // setResponse(response + e.target.name);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

//   function operatorType(e)
//   {
//     setResult(result + e.target.name);
//   }
const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    if(isNaN(preState)||isNaN(curState))return;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
    setOperator("")
    
    // setResponse(cal);
  };

const operatorType = (e) => {
    // setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
    // setResponse("");
  };

    function reset()
  {
    setPreState("");
    setCurState("");
    setInput("0");
    setOperator("")
    // setResponse("");
  }

  const handleDel = () => {
    setCurState(String(curState).slice(0, -1));
}
   
  return (
    <>
      <div className='wrp container'>
        <h1 >My Calculator</h1>
        {/* <div className='txt txt-size form-control bg-secondary-subtle'>
          {preState} {operator} {curState}
        <input type="text" value={curState} />
        </div> */}

        <div>
            <div>
                
                <div className="txt txt-size form-control bg-secondary-subtle"> {preState} {operator} {curState}</div>
                <input type="text" value={preState} className="txt txt-size form-control bg-secondary-subtle"></input>
            </div>
        </div>

        {/* <div className="">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input type="text" value={result} className="txt txt-size form-control bg-secondary-subtle" placeholder='' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div> */}

        <div>
          {/* <button type="button" className="btn-size-1 btn btn-outline-primary btn-lg" value="">Check</button>
                    <button type="button" className="btn-size-1 btn btn-outline-primary ms-2 btn-lg" value="">Correct Delete</button> */}
        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="7" onClick={inputNum} name='7'>7</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="8" onClick={inputNum} name='8'>8</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="9" onClick={inputNum} name='9'>9</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="-" onClick={operatorType} name='-'>-</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="*" onClick={operatorType} name='*'>*</button>

        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="4" onClick={inputNum} name='4'>4</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="5" onClick={inputNum} name='5'>5</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="6" onClick={inputNum} name='6'>6</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="+" onClick={operatorType} name='+'>+</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="/" onClick={operatorType} name='/'>/</button>
        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="1" onClick={inputNum} name='1'>1</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="2" onClick={inputNum} name='2'>2</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="3" onClick={inputNum} name='3'>3</button>
          <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="%">%</button>
          <button type="button" className="btn-size-2 btn btn-outline-success bg-success-subtle btn-lg ms-2" value="=" onClick={equals} >=</button>
        </div>

        <div className='mt-2'>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="0" onClick={inputNum} name='0' disabled={curState.length === 0 ? true : false}>0</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="00" onClick={inputNum} name='00' disabled={curState.length === 0 ? true : false}>00</button>
          <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="." onClick={inputNum} name='.'>.</button>
          <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="" onClick={handleDel}>Del</button>
          <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="" onClick={reset}>Clr</button>
        </div>
      </div>
    </>
  )
}
