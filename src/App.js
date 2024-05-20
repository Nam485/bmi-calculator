import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic
  let calcBmi = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert height from cm to meters

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert('Please enter a valid weight and height');
    } else {
      let bmi = weightNum / (heightNum * heightNum);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input 
              type='text' 
              placeholder='Enter your weight' 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input 
              type='text' 
              placeholder='Enter your height' 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
            />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn-btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
