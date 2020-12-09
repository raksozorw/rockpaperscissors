import { useContext } from "react";
import { GameContext } from "../context";
import RulesModal from "./RulesModal";

export default function Footer() {
  const ctx = useContext(GameContext);

  return (
    <div className='open-modal-button-div'>
      <button onClick={() => ctx.setShowModal(true)}>RULES</button>

      {ctx.showModal && <RulesModal />}
    </div>
  );
}
