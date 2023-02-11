import './App.css';
import Temperature from './components/Temperature/Temperature';
import Screen from './components/Temperature/Screen/Screen';
import Button from './components/Temperature/Button/Button/Button';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
function App() {
  let [degree, setDegree] = useState(23);
  let [color, setColor] = useState("#85CDFD");
  const incDegree = () => {
    if (degree < 70) {
      setDegree(++degree);
    }
    console.log(degree + " " + color);
  }
  const decDegree = () => {
    if (degree > -30) {
      setDegree(--degree);
    }
    console.log(degree + " " + color);
  }
  useEffect(() => {
    switch (degree) {
      case -20:
      case 24:
        setColor("#85CDFD");
        break;
      case 25:
      case 29:
        setColor("#9DF1DF");
        break;
      case 30:
      case 34:
        setColor("#03C988");
        break;
      case 35:
      case 39:
        setColor("yellow");
        break;
      case 40:
      case 49:
        setColor("orange");
        break;
      case 50:
        setColor("red");
        break;
    }
  }, [degree]);
  return (
    <>
    <h1 style={{textAlign:'center',marginTop:'150px'}}>Temperature app</h1>
      <Temperature className="temperature">
        <Screen degree={degree} bgColor={color} />
        <div className="button-container">
          <Button icon={<FaPlus className="button-icon" size="16px" />} bgColor="grey" onClick={incDegree} />
          <Button icon={<FaMinus className="button-icon" size="16px" />} bgColor="grey" onClick={decDegree} />
        </div>

      </Temperature>
    </>
  );
}

export default App;
