import React, {useState} from 'react';
import './Assignment.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');

  let calc = (event) =>{
    event.preventDefault();
    if(weight==0||height==0){
      alert('Please enter a valid height');
    }else{
      let bmi = weight*10000/(height*height);
      setBmi(bmi.toFixed(1));
    }
  }

  // let show = () =>{
  //   document.getElementById("res").style.visibility = "show";
  // }
  
  return (
    <main>
      <div>
        <h1 class="heading">BMI Calculator</h1>
      </div>
      <div>
        <form onSubmit={calc}>
          <label id="mass">Enter your weight in kg:</label><br/>
          <input type="number" for="mass" id="kg" value={weight} onChange={(event)=> setWeight(event.target.value)}/><br/>
          <label id="height">Enter your height in cm:</label><br/>
          <input type="number" for="height" id="cm" value={height} onChange={(event)=> setHeight(event.target.value)}/><br/><br/>
          <button id="sub">
            Submit
          </button><br/>
          <p id="res">Your BMI is {bmi} <br/>You are in {(bmi<=18.4)? "Underweight": (bmi<=24.9)? "Normal Weight" : "Overweight"} range</p>
        </form>
      </div>
    </main>
  );
}

export default App;