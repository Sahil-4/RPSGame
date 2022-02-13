import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";
const rockImage =
  "https://firebasestorage.googleapis.com/v0/b/storage4otherprojs.appspot.com/o/RPSG%2Fv2%2Frock.png?alt=media&token=e7590619-3886-48da-bcf3-3ae8cfb22a15";
const paperImage =
  "https://firebasestorage.googleapis.com/v0/b/storage4otherprojs.appspot.com/o/RPSG%2Fv2%2Fpaper.png?alt=media&token=83ba8215-215c-461e-92c8-dc423d4569b9";
const scissorImage =
  "https://firebasestorage.googleapis.com/v0/b/storage4otherprojs.appspot.com/o/RPSG%2Fv2%2Fscissor.png?alt=media&token=6492198f-449a-4836-b868-799718209f08";

const Game = () => {
  const { Choices, Points, Result, compareChoiceWithBot } =
    useContext(GameContext);

  return (
    <div className="game-page H100 W100">
      <h1 className="game-title">Rock Paper Scissor</h1>

      <div className="score-board W100">
        <div className="your-score-board score-boards">
          <h2>You choose : {Choices.playerChoice}</h2>
          <h2>Your Points : {Points.playerPoints}</h2>
        </div>

        <div className="opponent-score-board score-boards">
          <h2>Opponent choose : {Choices.opponentChoice}</h2>
          <h2>Opponent's Points : {Points.opponentPoints}</h2>
        </div>
      </div>

      <div className="result-box W100">
        <h5 id="result">{Result}</h5>
      </div>

      <div className="options-box W100">
        <img
          src={rockImage}
          alt="Option Rock"
          className="choice-image"
          onClick={() => {
            compareChoiceWithBot(0);
          }}
        />
        <img
          src={paperImage}
          alt="Option Paper"
          className="choice-image"
          onClick={() => {
            compareChoiceWithBot(1);
          }}
        />
        <img
          src={scissorImage}
          alt="Option Scissor"
          className="choice-image"
          onClick={() => {
            compareChoiceWithBot(2);
          }}
        />
      </div>
    </div>
  );
};

export default Game;
