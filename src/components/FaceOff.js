import { useContext, useEffect } from "react";
import { GameContext } from "../context";
import Results from "./Results";
import icons from "./icons";
import PlayDetails from "./PlayDetails";

export default function FaceOff() {
  const ctx = useContext(GameContext);

  const choiceKeys = (choice) => {
    let selection = null;
    switch (choice) {
      case 0:
        selection = icons[0];
        break;
      case 1:
        selection = icons[1];
        break;
      case 2:
        selection = icons[2];
        break;
      case 3:
        selection = icons[3];
        break;
      case 4:
        selection = icons[4];
        break;
      default:
        console.log("Selection error");
    }
    return selection;
  };

  const makeComputerChoice = () => {
    const randomInteger = Math.floor(Math.random() * 4);
    const computerChoice = choiceKeys(randomInteger);
    ctx.setComputerChoice(computerChoice);
  };

  useEffect(() => {
    makeComputerChoice();
  }, []);

  return (
    <div className='face-off'>
      <div className='choices'>
        <div>{ctx.computerChoice && <PlayDetails type='player' />}</div>
        <div className='result-and-replay'>
          <div>
            {ctx.computerChoice && <Results />}
            <button
              onClick={() => {
                ctx.setPlayerChoice(null);
                ctx.setComputerChoice(null);
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
        <div>{ctx.computerChoice && <PlayDetails type='computer' />}</div>
      </div>
    </div>
  );
}
