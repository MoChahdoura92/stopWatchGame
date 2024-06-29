import { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const lost = remainingTime <= 0;
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {lost && <h2>"You Lost"</h2>}
      {!lost && <h2>Your Score is : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{(remainingTime / 1000).toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
