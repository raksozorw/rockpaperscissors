import ReactDOM from "react-dom";
import { useContext, Fragment } from "react";
import { GameContext } from "../context";
import imageRulesBonus from "../images/imageRulesBonus.svg";

export default function RulesModal() {
  const ctx = useContext(GameContext);

  return ReactDOM.createPortal(
    <Fragment>
      <div className='modal-overlay' />
      <div
        className='modal-wrapper'
        aria-modal
        aria-hidden
        tabIndex={-1}
        role='dialog'
      >
        <div className='modal'>
          <div className='modal-header'>
            <div className='modal-title'>
              <h6>RULES</h6>
            </div>
            <div className='modal-button-div'>
              <button
                type='button'
                className='modal-close-button'
                data-dismiss='modal'
                aria-label='Close'
                onClick={() => ctx.setShowModal(false)}
              >
                ✕
              </button>
            </div>
          </div>
          <img src={imageRulesBonus} alt='rules'></img>
        </div>
      </div>
    </Fragment>,
    document.body
  );
}
