import styles from "./TextChoiceDisplay.module.css";

const TextChoiceDisplay = ({ playerChoice, computerChoice }) => {
  return (
    <div className={styles["text-choice-display"]}>
      <Selection player="You" choice={playerChoice}></Selection>
      <Selection player="Computer" choice={computerChoice}></Selection>
    </div>
  );
};

export default TextChoiceDisplay;

function Selection({ player, choice }) {
  return (
    <div className={styles.choice}>
      <h3>{player} Chose</h3>
      <h1>{choice}</h1>
    </div>
  );
}
