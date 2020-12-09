import { useContext } from "react";
import { GameContext } from "../context";
import logoBonus from "../images/logoBonus.svg";

export default function Header() {
  const ctx = useContext(GameContext);
  return (
    <div className='header'>
      <div className='title'>
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
        <h1>LIZARD</h1>
        <h1>SPOCK</h1>
      </div>
      <div className='score'>
        <h2>SCORE</h2>
        <h3>{ctx.score}</h3>
      </div>
    </div>
  );
}
