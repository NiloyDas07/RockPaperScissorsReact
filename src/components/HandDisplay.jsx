import styles from "./HandDisplay.module.css";

const HandDisplay = ({ playerHand, computerHand }) => {
  return (
    <div className={`${styles["hand-selection-emoji"]}`}>
      <h1>{playerHand}</h1>
      <h1>{computerHand}</h1>
    </div>
  );
};

export default HandDisplay;
