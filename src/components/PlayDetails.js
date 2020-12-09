import { useContext } from "react";
import { GameContext } from "../context";

export default function PlayDetails(props) {
  const ctx = useContext(GameContext);

  const highlightWinner = () => {
    if (props.type === "computer" && ctx.outcome === "YOU LOSE") {
      return {
        boxShadow:
          "0px 0px 0px 40px rgba(255,255,255,0.2),0px 0px 0px 80px rgba(255,255,255,0.1), 0px 0px 0px 120px rgba(255,255,255,0.05) ",
      };
    } else if (props.type === "player" && ctx.outcome === "YOU WIN") {
      return {
        boxShadow:
          "0px 0px 0px 40px rgba(255,255,255,0.3),0px 0px 0px 80px rgba(255,255,255,0.1), 0px 0px 0px 120px rgba(255,255,255,0.05) ",
      };
    }
  };

  return (
    <div className='play-details'>
      {props.type === "computer" ? (
        <h4>THE HOUSE PICKED</h4>
      ) : (
        <h4>YOU PICKED</h4>
      )}
      <div
        className={
          props.type === "computer"
            ? `${ctx.computerChoice.name} large-circle-outer`
            : `${ctx.playerChoice.name} large-circle-outer`
        }
        style={highlightWinner()}
      >
        <div className='large-img-circle-inner'>
          <img
            src={
              props.type === "computer"
                ? ctx.computerChoice.svg
                : ctx.playerChoice.svg
            }
            alt={
              props.type === "computer"
                ? ctx.computerChoice.name
                : ctx.playerChoice.name
            }
          ></img>
        </div>
      </div>
    </div>
  );
}
