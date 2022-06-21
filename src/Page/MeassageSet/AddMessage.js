import React, { useState } from "react";

import Button from "../../Component/CustomButton";
import Popup from "../../Component/_shared/Popup";

import axios from "axios";
import {
  SubHeaderField,
  SubTextSet,
  ButtonField,
  SubHeaderContainer,
  PopupContant,
  PopupInputField,
  ReplyPopupHead,
  PopupInput,
} from "../Style/AddMessageStyle";

import { useNavigate } from "react-router-dom";
import { Bot } from "../../mobx/MobxStore";

const AddMessage = (props) => {
  const navigate = useNavigate();
  const [messageSet, setMessageSet] = useState("");
  const [usernameErr, setusernameErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handelpopup = () => {
    togglePopup();
  };

  const addMessageHandler = async (e) => {
    console.log("first");
    if (messageSet.trim() === "") {
    } else {
      props.addMessageHandler(messageSet);
      togglePopup();
    }
  };

  return (
    <SubHeaderContainer>
      <SubHeaderField>
        <SubTextSet>Bot Message Set </SubTextSet>
        <ButtonField>
          <Button
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
            style="button"
          >
            New Set
          </Button>

          <Button onClick={() => navigate("/autosetting")} style="button">
            Setting
          </Button>

          {isOpen && (
            <Popup
              content={
                <>
                  <PopupContant>
                    <PopupInputField>
                      <ReplyPopupHead>Add New Message Add</ReplyPopupHead>
                      <PopupInput
                        id="BotWord"
                        className="popupInput"
                        placeholder="Example Message Set 2"
                        type="text"
                        onChange={(e) => {
                          setMessageSet(e.target.value);
                        }}
                      />
                    </PopupInputField>
                    <Button
                      className="popupButton"
                      onClick={() => {
                        addMessageHandler();
                      }}
                      style="button-submit"
                    >
                      Submit
                    </Button>
                    <Button
                      className="popup-Cancel-Button"
                      role="button"
                      onClick={handelpopup}
                      style="button-cancil"
                    >
                      Cancel
                    </Button>
                  </PopupContant>
                </>
              }
            />
          )}
        </ButtonField>
      </SubHeaderField>
    </SubHeaderContainer>
  );
};

export default AddMessage;
