import styles from "./Scores.module.css";

const Scores = ({playerScore, computerScore}) => {
  return(
    <div className={styles.scores}>
      <h1>Score</h1>
      <h1>{playerScore}/{computerScore}</h1>
    </div>
  )
}

export default Scores; 