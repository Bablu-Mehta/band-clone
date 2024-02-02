import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const storedCounter = localStorage.getItem("counter");
  const intialCounter = storedCounter ? parseInt(storedCounter) : 0;

  const [counter, setCounter] = useState(intialCounter);

  const interval = useRef();

  const stopCounter = () => {
    clearInterval(interval.current);
  };

  const clearCounter = () => {
    clearInterval(interval.current);
    setCounter(0);
  };

  const clearLocalStorage = () => {
    const proceed = window.confirm("Are you Sure?");
    if (proceed) {
      clearInterval(interval.current);
      localStorage.removeItem("counter");
    }
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "10px",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          gap: "20px",
          padding: "30px 0",
        }}
      >
        <p style={{ fontSize: "30px", margin: "0" }}>{counter}</p>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            gap: "10px",
            padding: "20px 0",
          }}
        >
          <button style={buttonStyle} onClick={stopCounter}>
            Stop Counter
          </button>
          <button style={buttonStyle} onClick={clearCounter}>
            Clear Counter
          </button>
          <button style={buttonStyle} onClick={clearLocalStorage}>
            Clear Storage
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
