import React from "react";

const AddEditmodal = ({
  popupTitle,
  OnChangeInput,
  OnSubmitButton,
  toggelModal,
}) => {
  return (
    <>
      <h3>{popupTitle}</h3>

      <input onChange={(e) => OnChangeInput(e)} />
      <div className="button-container">
        <button onClick={() => OnSubmitButton()}>Submit</button>
        <button onClick={() => toggelModal()}>Cancel</button>
      </div>
    </>
  );
};

export default AddEditmodal;
