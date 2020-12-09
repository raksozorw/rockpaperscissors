import { useContext, useEffect } from "react";
import { GameContext } from "../context";

const Results = () => {
  const ctx = useContext(GameContext);

  const decideWinner = (player, computer) => {
    console.log("player: " + player);
    console.log("computer: " + computer);

    let testResult = null;

    const win = () => {
      testResult = "win";
      ctx.setOutcome("YOU WIN");
      console.log("win");
      const oldScore = ctx.score;
      ctx.setScore(oldScore + 1);
    };

    const lose = () => {
      testResult = "lose";
      ctx.setOutcome("YOU LOSE");
      console.log("lose");
      const oldScore = ctx.score;
      ctx.setScore(oldScore - 1);
    };

    if (player === computer) {
      ctx.setOutcome("DRAW");
    } else {
      switch (player) {
        case "rock":
          if (computer === "lizard" || computer === "scissors") {
            win();
          } else {
            lose();
          }
          break;
        case "paper":
          if (computer === "rock" || computer === "spock") {
            win();
          } else {
            lose();
          }
          break;
        case "scissors":
          if (computer === "paper" || computer === "lizard") {
            win();
          } else {
            lose();
          }
          break;
        case "lizard":
          if (computer === "spock" || computer === "paper") {
            win();
          } else {
            lose();
          }
          break;
        case "spock":
          if (computer === "scissors" || computer === "rock") {
            win();
          } else {
            lose();
          }
          break;
        default:
          console.log("error");
      }
    }
    return testResult;
  };

  useEffect(() => {
    if (ctx.computerChoice !== null && ctx.playerChoice !== null) {
      decideWinner(ctx.playerChoice.name, ctx.computerChoice.name);
    }
  }, [ctx.computerChoice, ctx.playerChoice]);

  return (
    <div>
      <h5>{ctx.outcome}</h5>
    </div>
  );
};

export default Results;
