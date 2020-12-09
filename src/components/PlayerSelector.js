import { useContext } from "react";
import { GameContext } from "../context";

import bgPentagon from "../images/bgPentagon.svg";
import iconRock from "../images/iconRock.svg";
import iconPaper from "../images/iconPaper.svg";
import iconScissors from "../images/iconScissors.svg";
import iconLizard from "../images/iconLizard.svg";
import iconSpock from "../images/iconSpock.svg";

export default function PlayerSelector() {
  const ctx = useContext(GameContext);

  const icons = [
    { svg: iconRock, name: "rock" },
    { svg: iconPaper, name: "paper" },
    { svg: iconScissors, name: "scissors" },
    { svg: iconLizard, name: "lizard" },
    { svg: iconSpock, name: "spock" },
  ];

  const handleClick = (choice) => {
    ctx.setPlayerChoice(choice);
  };

  return (
    <div className='player-selector'>
      <img src={bgPentagon} alt='pentagon' />
      <div className='icons-map'>
        {icons.map((item) => {
          return (
            <div
              className={`player-selector-icon ${item.name}`}
              onClick={() => handleClick(item)}
            >
              <div className='player-selector-icon-inner'>
                <img src={item.svg} alt={item.name} key={item.name} />
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
