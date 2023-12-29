import HandDisplay from "./components/HandDisplay";
import Scores from "./components/Scores";
import TextChoiceDisplay from "./components/TextChoiceDisplay";

import "./App.css";

function App() {
  //✊🏼✌🏼✋🏼
  return (
    <>
      <HandDisplay playerHand="✊🏼" computerHand="✌🏼"></HandDisplay>
      <Scores playerScore={0} computerScore={0}></Scores>
      <TextChoiceDisplay
        playerChoice="Rock"
        computerChoice="Scissors"
      ></TextChoiceDisplay>
    </>
  );
}

export default App;
