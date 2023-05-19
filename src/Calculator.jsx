import React, { useState } from 'react';

export default function Calculator() {
    //const [inputData, setInputData] = useState('');
    const ops = ['+', '-', '*', '%', '/'];
    const [current, setCurrent] = useState('');
    const [previous, setPrevious] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        //     if (
        //         (ops.includes(e.target.value) && ops.includes(inputData.slice(-1))) ||
        //         ((e.target.value == '0') && inputData === '') ||
        //         ((e.target.value == '00') && inputData === '') ||
        //         (ops.includes(e.target.value) && inputData === '')
        //     ) {return;}
        //    setInputData(inputData + e.target.value)
        if (
            (ops.includes(e.target.value) && ops.includes(current.slice(-1))) ||
            ((e.target.value === '0') && current === '') ||
            ((e.target.value === '00') && current === '') ||
            (ops.includes(e.target.value) && current === '') ||
            ((e.target.value === '.') && current.includes('.'))
        ) {
            return;
        }
        setCurrent(current + e.target.value);
        setResult(current);
    }

    const handleOps = (e) => {
        if (current === "") return;
        if (previous !== '') {
            setPrevious(compute());
        } else {
            setPrevious(current);
        }
        setCurrent('');
        setOperation(e.target.value)
        //setResult(previous + operation + current)
    }

    const compute = () => {
        let ans;
        let A = parseFloat(previous);
        let B = parseFloat(current);
        switch (operation) {
            case '+': ans = A + B; break;
            case '-': ans = A - B; break;
            case '*': ans = A * B; break;
            case '/': ans = A / B; break;
            case '%': ans = A % B; break;
            default: return;
        }
        return ans;
    }
    const handleResult = () => {
        //   setCurrent(eval(current).toString());
        try {
            if (current === '' || previous === '') return;
            let value = compute();
            if (value === undefined || value == null) return;
            setResult(value);
            //setCurrent(value)
            // setPrevious('');
            // setOperation('');
        }
        catch (e) {
            setCurrent('ERROR');
        }
    }
    const handleClr = () => {
        setCurrent('');
        setOperation('');
        setPrevious('');
        setResult('');
    }
    const handleDel = () => {
        setCurrent(String(current).slice(0, -1));
    }

    return (
        <>

            <h1 className='m-4'>Calculator</h1>

            <center>
                <div className='calculator p-2'>
                    {previous}{operation}{current}
                    <br />

                    <input type='text' name='input' required value={result !== '' ? result : current} onChange={() => { }}></input>
                    <br />
                    <br />

                    <button type='button' className='btn btn-dark' name="btn7" onClick={handleClick} value='7' >7</button>
                    <button type='button' className='btn btn-dark' name="btn8" onClick={handleClick} value='8'>8</button>
                    <button type='button' className='btn btn-dark' name="btn9" onClick={handleClick} value='9'>9</button>
                    <button type='button' className='btn btn-dark' name="ops" onClick={handleOps} value='/'>/</button>
                    <button type='button' className='btn btn-danger' name="btn" onClick={handleDel} value='Del'>Del</button>
                    <br></br>
                    <button type='button' className='btn btn-dark' name="btn4" onClick={handleClick} value='4'>4</button>
                    <button type='button' className='btn btn-dark' name="btn5" onClick={handleClick} value='5'>5</button>
                    <button type='button' className='btn btn-dark' name="btn6" onClick={handleClick} value='6'>6</button>
                    <button type='button' className='btn btn-dark' name="ops" onClick={handleOps} value=''></button>
                    <button type='button' className='btn btn-dark' name="ops" onClick={handleOps} value='%'>%</button>
                    <br />
                    <button type='button' className='btn btn-dark' name="btn1" onClick={handleClick} value='1'>1</button>
                    <button type='button' className='btn btn-dark' name="btn2" onClick={handleClick} value='2'>2</button>
                    <button type='button' className='btn btn-dark' name="btn3" onClick={handleClick} value='3'>3</button>
                    <button type='button' className='btn btn-dark' name="ops" onClick={handleOps} value='+'>+</button>
                    <button type='button' className='btn btn-dark' name="ops" onClick={handleOps} value='-'>-</button>

                    <br />
                    <button type='button' className='btn btn-dark' name="btn0" onClick={handleClick} value='0'>0</button>
                    <button type='button' className='btn btn-dark' name="btn00" onClick={handleClick} value='00'>00</button>
                    <button type='button' className='btn btn-dark' name="btn" onClick={handleClick} value='.'>.</button>
                    <button type='button' className='btn btn-danger' name="btn" onClick={handleClr} value='='>AC</button>
                    <button type='button' className='btn btn-success' name="btn" onClick={handleResult} value='='>=</button>
                </div>


            </center>


        </>
    )
}