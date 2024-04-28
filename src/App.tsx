import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Settings } from "./components/settings/Settings";

function App() {
  const setToLocalStorage = (maxValue: number, minValue: number) => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("startValue", JSON.stringify(minValue));
  };
  const getFromLocalStorage = () => {
    let minValueString = localStorage.getItem("startValue");
    let maxValueString = localStorage.getItem("maxValue");
    if (maxValueString && minValueString) {
      let maxValue = parseInt(maxValueString);
      let minValue = parseInt(minValueString);
      return { maxValue, minValue };
    }
    return { maxValue: 0, minValue: 0 };
  };

  const [maxValue, setMaxValue] = useState(
    () => getFromLocalStorage().maxValue
  );
  const [minValue, setMinValue] = useState(
    () => getFromLocalStorage().minValue
  );

  const [number, setNumber] = useState<number>(getFromLocalStorage()!.minValue);

  const [warning2, setWarning2] = useState(true);

  const setNumbers = (newMinValue: number, newMaxValue: number) => {
    setMaxValue(newMaxValue);
    setMinValue(newMinValue);
    setNumber(newMinValue);
    localStorage.setItem("startValue", JSON.stringify(newMinValue));
    localStorage.setItem("maxValue", JSON.stringify(newMaxValue));
    setToLocalStorage(maxValue, minValue);
  };

  useEffect(() => {
    if (
      maxValue !== getFromLocalStorage().maxValue ||
      minValue !== getFromLocalStorage().minValue
    ) {
      setWarning2(true);
    } else {
      setWarning2(false);
    }
  }, [maxValue, minValue]);

  const warning =
    maxValue === minValue ||
    maxValue < minValue ||
    minValue < 0 ||
    maxValue < 0;

  const setButtonHandler = () => {
    setNumbers(minValue, maxValue);
  
    setWarning2(false)
  };

  const incrementHandler = () => {
    if (number < maxValue) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  const resetHandler = () => {
    setNumber(minValue);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <Settings
          maxValue={maxValue}
          minValue={minValue}
          setMaxValue={setMaxValue}
          setMinValue={setMinValue}
          warning={warning}
          setButtonHandler={setButtonHandler}
        />
        <Counter
          maxValue={maxValue}
          minValue={minValue}
          setNumber={setNumber}
          incrementHandler={incrementHandler}
          resetHandler={resetHandler}
          number={number}
          warning={warning}
          warning2={warning2}
        />
      </div>
    </div>
  );
}

export default App;
