import React, { useEffect, useRef, useState } from "react";
import classes from "./StopWatch.module.css";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [startWatch, setStartWatch] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const interval = useRef();

  function handleStartStopWatch() {
    setStartWatch((prev) => !prev);
    setIsRunning(true);
  }

  function handlePausePlay() {
    handleStartStopWatch();
    clearInterval(interval.current);
  }

  function handleClear() {
    setSecond(0);
    setMinute(0);
    clearInterval(interval.current);
    setIsRunning(false);
    setStartWatch(false);
  }

  function handleTimer() {
    interval.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 10);
  }

  useEffect(() => {
    if (second === 60) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }

    if (minute === 60) {
      setHour((prev) => prev + 1);
      setMinute(0);
    }

    if (startWatch) {
      handleTimer();
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [second, minute, startWatch]);
  return (
    <div className={classes.container}>
      <div className={classes.displayTime}>
        <p>{hour + " - " + minute + " -  " + second}</p>
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          onClick={handleStartStopWatch}
          disabled={isRunning}
        >
          Start
        </Button>

        <Button variant="contained" onClick={handlePausePlay}>
          {startWatch && isRunning ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>

        <Button variant="contained" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default StopWatch;
