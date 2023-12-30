import HandDisplay from "./components/HandDisplay";
import Scores from "./components/Scores";
import TextChoiceDisplay from "./components/TextChoiceDisplay";
import ButtonsComponent from "./components/ButtonsComponent";

import hands from "./consts/hands";

import "./App.css";

import { useState } from "react";

function App() {
  const [gameState, setGameState] = useState({
    playerHand: hands.rock,
    computerHand: hands.rock,
    playerScore: 0,
    computerScore: 0,
  });

  return (
    <>
      <HandDisplay
        playerHand={gameState.playerHand.emogi}
        computerHand={gameState.computerHand.emogi}
      ></HandDisplay>
      <Scores
        playerScore={gameState.playerScore}
        computerScore={gameState.computerScore}
      ></Scores>
      <TextChoiceDisplay
        playerChoice={gameState.playerHand.name}
        computerChoice={gameState.computerHand.name}
      ></TextChoiceDisplay>
      <ButtonsComponent setGameState={setGameState}></ButtonsComponent>
    </>
  );
}

export default App;
