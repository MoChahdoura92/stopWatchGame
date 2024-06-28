import { useState, useRef } from "react";

export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();

  const [challengeStarted, setChallengeStarted] = useState(false);
  const [challengeTimerEnded, setChallengeTimerEnded] = useState(false);

  function startChallenge() {
    timer.current = setTimeout(() => {
      setChallengeTimerEnded(true);
      setChallengeStarted(false);
    }, targetTime * 1000);
    setChallengeStarted(true);
  }

  function stopChallenge() {
    clearTimeout(timer.current);
    setChallengeStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {challengeTimerEnded && <p>You Lost ... !</p>}
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
  );
}
