import React from "react";
import AddEditmodal from "../Modal/AddEditmodal";
import "./style.css";
const Popup = (props) => {
  const {
    showModal = false,
    toggelModal,
    popupTitle = "title",
    OnSubmitButton,
    OnChangeInput,
    children,
  } = props;
  return (
    <div>
      <div className={!showModal ? "modal" : "show-modal modal"}>
        <div className="modal-content">
          <span className="close-button" onClick={() => toggelModal()}>
            ×
          </span>
          {children}
          {/* <h3>{popupTitle}</h3>

          <input onChange={(e) => OnChangeInput(e)} />
          <div className="button-container">
            <button onClick={() => OnSubmitButton()}>Submit</button>
            <button onClick={() => toggelModal()}>Cancel</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
