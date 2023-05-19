// import "./App.css";
import { useState, useEffect } from "react";
import './Style.css';
// import NumberFormat from "react-number-format";

function FinalCal() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

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
  };

  // const minusPlus = () => {
  //   if (curState.charAt(0) === "-") {
  //     setCurState(curState.substring(1));
  //   } else {
  //     setCurState("-" + curState);
  //   }
  // };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const handleDel = () => {
    setCurState(String(curState).slice(0, -1));
}

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
    setOperator("")
  };
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='screen'>
          {preState} {operator} {curState}
        <input type="text" value={curState} />
        </div>
        <div className='btn light-gray' onClick={reset}>
          AC
        </div>
        <div className='btn light-gray' onClick={percent}>
          %
        </div>
        <div className='btn light-gray' onClick={handleDel}>
          Delete
        </div>
        <div className='btn orange' onClick={operatorType}>
          /
        </div>
        <div className='btn' onClick={inputNum}>
          7
        </div>
        <div className='btn' onClick={inputNum}>
          8
        </div>
        <div className='btn' onClick={inputNum}>
          9
        </div>
        <div className='btn orange' onClick={operatorType}>
          X
        </div>
        <div className='btn' onClick={inputNum}>
          4
        </div>
        <div className='btn' onClick={inputNum}>
          5
        </div>
        <div className='btn' onClick={inputNum}>
          6
        </div>
        <div className='btn orange' onClick={operatorType}>
          +
        </div>
        <div className='btn' onClick={inputNum}>
          1
        </div>
        <div className='btn' onClick={inputNum}>
          2
        </div>
        <div className='btn' onClick={inputNum}>
          3
        </div>
        <div className='btn orange' onClick={operatorType}>
          -
        </div>
        <div className='btn zero' onClick={inputNum} >
          0
        </div>
        <div className='btn' onClick={inputNum}>
          .
        </div>
        <div className='btn' onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default FinalCal;
// import React, { useState, useEffect } from 'react'
// // import { NumberFormat } from 'react-intl';
// // import NumberFormat from "react-number-format,react-intl";
// import NumberFormat from 'react-number-format';
// import {FormattedMessage} from 'react-intl';


// export default function FinalCal() {
    
//     const[preState, setPreState] = useState("");
//     const[curState, setCurState] = useState("");
//     const[input, setInput] = useState("0");
//     const[operator, setOperator] = useState(null);
//     const[total, setTotal] = useState(false);


//     const inputNum = (e) => {
//         if (curState.includes(".") && e.target.innerText === ".") return;

//     if (total) {
//       setPreState("");
//     }

//     curState
//       ? setCurState((pre) => pre + e.target.innerText)
//       : setCurState(e.target.innerText);
//     setTotal(false);
//     };

//     const operatorType = (e) => {

//     }

//     const percent = () => {

//     }
    
//     const reset = () => {
        
//     }

//     const equals = (e) => {
//         if (e?.target.innerText === "=") {
//           setTotal(true);
//         }
//         let cal;
//         switch (operator) {
//           case "/":
//             cal = String(parseFloat(preState) / parseFloat(curState));
//             break;
    
//           case "+":
//             cal = String(parseFloat(preState) + parseFloat(curState));
//             break;
//           case "X":
//             cal = String(parseFloat(preState) * parseFloat(curState));
//             break;
//           case "-":
//             cal = String(parseFloat(preState) - parseFloat(curState));
//             break;
//           default:
//             return;
//         }
//     }
//   return (
//     <>
//       <div className='wrp container'>
//         <h1 >My Calculator</h1>
//         <div className="">
          
//           {input !== "" || input === "0" ? (
//             <input type='text'
//               value={input}
//               // displayType={"text"}
//               // thousandSeparator={true}
//             />
//           ) : (
//             <input type='text'
//               value={preState}
//                 // displayType={"text"}
//                 // thousandSeparator={true}
//             />
//           )}
//         </div>

//         <div>
//           {/* <button type="button" className="btn-size-1 btn btn-outline-primary btn-lg" value="">Check</button>
//                     <button type="button" className="btn-size-1 btn btn-outline-primary ms-2 btn-lg" value="">Correct Delete</button> */}
//         </div>

//         <div className='mt-2'>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="1"  name='7'>7</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="2"  name='8'>8</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="3"  name='9'>9</button>
//           <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="-"  name='-' onClick={operatorType}>-</button>
//           <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="*"  name='*' onClick={operatorType}>*</button>

//         </div>

//         <div className='mt-2'>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="4"  name='4'>4</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="5"  name='5'>5</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="6"  name='6'>6</button>
//           <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="+"  name='+' onClick={operatorType}>+</button>
//           <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="/"  name='/' onClick={operatorType}>/</button>
//         </div>

//         <div className='mt-2'>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="1"  name='1'>1</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="2"  name='2'>2</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="3"  name='3'>3</button>
//           <button type="button" className="btn-size-2 btn btn-outline-secondary bg-secondary-subtle btn-lg ms-2" value="%" onClick={percent}>%</button>
//           <button type="button" className="btn-size-2 btn btn-outline-success bg-success-subtle btn-lg ms-2" value="=" onClick={equals}>=</button>
//         </div>

//         <div className='mt-2'>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg" value="0"  name='0'>0</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="00"  name='00'>00</button>
//           <button type="button" className="btn-size-2 btn btn-outline-primary bg-primary-subtle btn-lg ms-2" value="."  name='.'>.</button>
//           <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="">Del</button>
//           <button type="button" className="btn-size-2 btn btn-outline-danger bg-danger-subtle btn-lg ms-2" value="" onClick={reset}>Clr</button>
//         </div>
//       </div>
//     </>
//   )
// }


// // const [result, setResult] = useState([]);

// //   const inputRef = useRef(null);

// //   useEffect(() => inputRef.current.focus());

// //   function handleClick(e)
// //   {
// //     setResult(result + e.target.name);
// //   }

// //   function handleBackSpace(){
// //     setResult(result.slice(0, -1));
// //   }

// //   function handleClear()
// //   {
// //     setResult("");
// //   }

// //   function handleCalculate()
// //   {
// //       try{
// //         setResult(eval(result).toString());
// //       }
// //       catch (error)
// //       {
// //         setResult ("ERROR");
// //       }
// //   }



// {/* <label htmlFor="exampleInputEmail1" className="form-label"></label>
//           <input type="text" value={input} className="txt txt-size form-control bg-secondary-subtle" placeholder='' id="exampleInputEmail1" aria-describedby="emailHelp" />
//           <div id="emailHelp" className="form-text"></div> */}