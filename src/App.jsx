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
  const isClr = buttonLabel === 'CLR';

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

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    if (value === 'CLR') {
      setDispValue('0');
    } else {
      setDispValue((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <div className='App'>
      <div className='Header'>
        Calculator of Miguel Jervinz Legaspi  WMD - 3A
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
            <CalcButton buttonLabel="%" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="4" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="5" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="6" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="-" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="1" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="2" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="3" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="X" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="CLR" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="0" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="=" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="+" onClick={buttonClickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;