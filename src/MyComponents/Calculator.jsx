import React, { useState } from 'react';
import './Calculator.css';


const Calculator = () => {

    const [input, setInput] = useState("");
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [Operation, setOperation] = useState('');
    const [history, setHistory] = useState();



    const handleInput = (e) => {
        if (input === "ERROR") return;
        
        if (
            (e.target.value === '0' && input === '')
            ||
            (e.target.value === '00' && input === '')
        ) {
            return;
        }

        // if (Operation !== '') {
        //     setInput('');
        // }
        if (Operation === '') {
            // setInput((e.target.value))
            // setInput('');
            setInput((prev) => prev + e.target.value);
            setNum1((prev) => prev + e.target.value);
        }
        else {
            // setInput('');
            setInput((prev) => prev + e.target.value);
            setNum2((prev) => prev + e.target.value);
            // setPreviousValue((e.target.value));
        }
    }

    const handleOpeartion = (e) => {
        // debugger;
        if (previousValue !== '') {
            console.log(previousValue)
            calculate();
        }
        // setPreviousValue(parseFloat(input));
        // setInput("");
        setOperation(e.target.value);
        setInput("");
        setNum2("");

    }

    const clear = () => {
        setInput("");
        setNum1('');
        setNum2('');
        setOperation("");
        setPreviousValue("");
        setHistory("")
    }
    const backspace = () => {
        try {
            let back;
            back = input.slice(0, -1);
            console.log(back)
            setInput(back);
        }
        catch (err) {
            // setInput("ERROR:" + err);
            // setHistory("")
        }
    }
    const calculate = (e) => {
        // try{
        //     setResult(eval(result).toString())
        // }catch(err){
        //     setResult("ERROR")
        // }
        try {
            if (num1 == '' || num2 == '') {
                setInput("ERROR")
            }
            else {
                let number1 = parseInt(num1);
                let number2 = parseInt(num2);
                // const currentValue = parseFloat(input);
                let result = 0;
                switch (Operation) {
                    case '+':
                        result = number1 + number2;
                        break;
                    case "-":
                        result = number1 - number2;
                        break;
                    case "*":
                        result = number1 * number2;
                        break;
                    case "/":
                        result = number1 / number2;
                        break;
                    case "%":
                        result =((number1 % number1) + number1) % number2;
                        break;
                    case 'MOD':
                        // result = number1 MOD number2;
                        // result = (number1 * 100) / number2;
                        result = (number1/number2)*100;
                        // result =((number1 % number1) + number1) % number2;
                       break;
                        default:

                        result = number1;

                }
                // debugger;
                console.log(result)
                // debugger;
                setInput(result);
                setNum1(result);
                setNum2('');
                setOperation('');
                // setNum2('');
                // setResponse(result.toString());
                // console.log(response)
                // setInput(result.toString());
                // setPreviousValue(null);
                // setOperation(null)

                const Calculation = `${num1} ${Operation} ${num2} =  ${result} `;
                setHistory([Calculation])
                // setInput("")


            }
        }
        catch (err) {
            setInput("ERROR");
        }


    }
    return (
        <div>
            {/* <div class="bubbles">
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
                <span class="four"></span>
                <span class="five"></span>
                <span class="six"></span>
                <span class="seven"></span>
            </div> */}
            <div className="container px-3 mx-5 " >
                <form>
                    <div className='text container'>
                        {/* {num1} {Operation} {num2} */}
                        {history}
                        <input type="text" value={input} />
                    </div>


                    <div class="buttons">
                        <input type="button" value="AC" id="clear" onClick={clear} />
                        <input type="button" value="DEL" id="backspace" onClick={backspace} />
                        <input type="button" value="MOD" onClick={handleOpeartion} />
                        <input type="button" value="/" onClick={handleOpeartion} />
                    </div>
                    <div class="buttons">
                        <input type="button" value="7" onClick={handleInput} />
                        <input type="button" value="8" onClick={handleInput} />
                        <input type="button" value="9" onClick={handleInput} />
                        <input type="button" value="*" onClick={handleOpeartion} />

                    </div>
                    <div class="buttons">
                        <input type="button" value="4" onClick={handleInput} />
                        <input type="button" value="5" onClick={handleInput} />
                        <input type="button" value="6" onClick={handleInput} />
                        <input type="button" value="-" onClick={handleOpeartion} />
                    </div>
                    <div class="buttons">
                        <input type="button" value="1" onClick={handleInput} />
                        <input type="button" value="2" onClick={handleInput} />
                        <input type="button" value="3" onClick={handleInput} />
                        <input type="button" value="+" onClick={handleOpeartion} />
                    </div>
                    <div class="buttons">
                        <input type="button" value="0" onClick={handleInput} />
                        <input type="button" value="." onClick={handleInput} />
                        <input type="button" value="%" onClick={handleOpeartion} />
                        <input type="button" value="=" onClick={calculate} />
                    </div>

                </form>
            </div>


        </div>
    );
}

export default Calculator;