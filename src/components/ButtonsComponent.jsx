import hands from "../consts/hands.js";

import styles from "./ButtonsComponent.module.css";

export default function ButtonsComponent({ setGameState }) {
  return (
    <div className={styles["button-component"]}>
      <Button handType={hands.rock} setGameState={setGameState}></Button>
      <Button handType={hands.paper} setGameState={setGameState}></Button>
      <Button handType={hands.scissors} setGameState={setGameState}></Button>
    </div>
  );
}

function Button({ handType, setGameState }) {
  const getComputerHand = () => {
    const handsArray = [hands.rock, hands.paper, hands.scissors];

    return handsArray[Math.floor(Math.random() * 3)];
  };

  const getPlayerScore = (currentScore, computerHand) => {
    return;
  };

  const handleClick = () => {
    const computerHand = getComputerHand();

    setGameState((prevState) => {
      return {
        playerHand: handType,
        computerHand,
        playerScore:
          handType.beats === computerHand.name
            ? prevState.playerScore + 1
            : prevState.playerScore,
        computerScore:
          computerHand.beats === handType.name
            ? prevState.computerScore + 1
            : prevState.computerScore,
      };
    });
  };

  return (
    <button className={styles["choice-button"]} onClick={handleClick}>
      {handType.name}
    </button>
  );
}
