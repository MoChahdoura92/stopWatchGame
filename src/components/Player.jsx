import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const refPlayerName = useRef();

  function HandelClick() {
    setPlayerName(refPlayerName.current.value);
    refPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown Player"}</h2>
      <p>
        <input ref={refPlayerName} type="text" />
        <button onClick={HandelClick}>Set Name</button>
      </p>
    </section>
  );
}
