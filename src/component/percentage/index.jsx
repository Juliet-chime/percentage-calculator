import React, { useState, useEffect } from "react";

const Percentage = () => {
  const [value, setValue] = useState(0);
  const [range, setRange] = useState(0);
  const [result, setResult] = useState(0);

  const onValueChange = (e) => {
    const number = e.target.value;
    const numVal = Number(number);
    setValue(numVal);
    // setResult((range / 100) * numVal);
  };

  const onRangeChange = (e) => {
    setRange(e.target.value);
    // setResult((e.target.value / 100) * value);
  };

  useEffect(() => {
    const calculatePercent = () => {
      setResult((range / 100) * value);
    };
    calculatePercent();
  }, [value, range]);

  return (
    <div className="container">
      <h1>PERCENTAGE CALCULATOR</h1><br/><br/>
      <div className="bodycontd">
        <form action="">
          <input
            type="text"
            className="numberinput"
            placeholder="Enter Number"
            value={value}
            onChange={onValueChange}
          />
        </form>
        <br /><br/><br/>

        <form action="">
          <label htmlFor="">{range}</label>{" "}
          <input
            type="range"
            min="0"
            max="100"
            value={range}
            onChange={onRangeChange}
          />
        </form><br/>

        <h3>Result : {result}</h3>
      </div>
    </div>
  );
};

export default Percentage;
