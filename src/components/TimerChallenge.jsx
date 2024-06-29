import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
  const refTimeChallengeDialog = useRef();

  const [challengeStarted, setChallengeStarted] = useState(false);
  const [challengeTimerEnded, setChallengeTimerEnded] = useState(false);

  function startChallenge() {
    timer.current = setTimeout(() => {
      setChallengeTimerEnded(true);
      setChallengeStarted(false);
      refTimeChallengeDialog.current.showModal();
    }, targetTime * 1000);

    setChallengeStarted(true);
  }

  function stopChallenge() {
    clearTimeout(timer.current);
    setChallengeStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={refTimeChallengeDialog}
        targetTime={targetTime}
        result={"Lost !"}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seconds {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={challengeStarted ? stopChallenge : startChallenge}>
            {challengeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={challengeStarted ? "active" : undefined}>
          {challengeStarted ? "Timer is running" : "Time inactive "}
        </p>
      </section>
    </>
  );
}
