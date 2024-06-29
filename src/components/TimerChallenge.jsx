import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [remainingTime, setremainingTime] = useState(targetTime * 1000);
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  console.log(timerIsActive);

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function startChallenge() {
    timer.current = setInterval(() => {
      setremainingTime((oldRemainingTime) => oldRemainingTime - 100);
    }, 100);
  }

  function stopChallenge() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handelResetTimer() {
    setremainingTime(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handelResetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seconds {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? stopChallenge : startChallenge}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running" : "Time inactive "}
        </p>
      </section>
    </>
  );
}
