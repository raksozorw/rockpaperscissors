import { useState, createContext } from "react";

export const GameContext = createContext(null);

export default function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [outcome, setOutcome] = useState(null);

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
        result,
        setResult,
        showModal,
        setShowModal,
        outcome,
        setOutcome,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
