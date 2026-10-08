import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

// Pass onClick down to the HTML button tag
function CalcButton({ buttonLabel, onClick }) {
  const isClr = buttonLabel === 'C';

  return (
    <button 
      className={`button ${isClr ? 'clr' : ''}`} 
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
}

function App() {
  const [dispValue, setDispValue] = useState('0');

  // Store the first number and selected operation
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    // Clear button
    if (value === 'C') {
      setDispValue('0');
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecond(false);
    }

    // Surname button
    else if (value === 'LEGASPI') {
      setDispValue('MIGUEL JERVINZ LEGASPI');
    }

    // Number buttons
else if (!isNaN(value)) {
  if (waitingForSecond) {
    setDispValue(value);
    setWaitingForSecond(false);
  } else {
    setDispValue((prev) => (prev === '0' ? value : prev + value));
  }
}

    // Operation buttons
else if (value === '+' || value === '-' || value === '*' || value === '÷') {
  setFirstOperand(Number(dispValue));
  setOperator(value);

  // Show the operation after selecting it
  setDispValue(value);
  setWaitingForSecond(true);
}

    // Equals button
    else if (value === '=') {
      if (firstOperand !== null && operator !== null) {
        const secondOperand = Number(dispValue);
        let result;

        if (operator === '+') {
          result = firstOperand + secondOperand;
        } else if (operator === '-') {
          result = firstOperand - secondOperand;
        } else if (operator === '*') {
          result = firstOperand * secondOperand;
        } else if (operator === '÷') {
          if (secondOperand === 0) {
            setDispValue('Error');
            setFirstOperand(null);
            setOperator(null);
            return;
          }

          result = firstOperand / secondOperand;
        }

        // Show only the answer
        setDispValue(String(result));

        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecond(false);
      }
    }
  };

  return (
    <div className='App'>
      <div className='Header'>
        Calculator of MIGUEL JERVINZ LEGASPI - IT3A
      </div>
      <div className='calculator-frame'>
        <div className='calculator'>
          {/* Pass the state variable here */}
          <CalcDisplay dispValue={dispValue} />

          <div className='Keypad'>
            {/* Use curly braces onClick={buttonClickHandler} */}
            <CalcButton buttonLabel="7" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="8" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="9" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="÷" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="4" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="5" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="6" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="-" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="1" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="2" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="3" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="*" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="C" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="0" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="=" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="+" onClick={buttonClickHandler} />
          </div>

          {/* Surname button under all number buttons */}
          <div className='surname-button'>
            <CalcButton buttonLabel="LEGASPI" onClick={buttonClickHandler} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;