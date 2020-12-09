import { useContext } from "react";
import { GameContext } from "../context";
import PlayerSelector from "./PlayerSelector";
import FaceOff from "./FaceOff";

export default function MainPage() {
  const ctx = useContext(GameContext);

  return (
    <div className='main-page'>
      {ctx.playerChoice === null && <PlayerSelector />}
      {ctx.playerChoice && <FaceOff />}
    </div>
  );
}
