import React, { useEffect, useState } from "react";
import axios from "axios";

import { MdDeleteForever } from "react-icons/md";

import { HiDotsHorizontal } from "react-icons/hi";
import Popup from "../../Component/_shared/Popup";

import {
  EditPopup,
  PopupContant,
  PopupDelField,
  PopupEditContant,
  PopupInput,
  ReplyPopupHead,
} from "../Style/AddMessageStyle";
import { Bot } from "../../mobx/MobxStore";
// import MessageEditPopup from "./MessageEditPopup";

const MessageReplyBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const delReplyhandler = async (id) => {
    props.userr(id);
    togglePopup();
  };

  return (
    <div>
      <HiDotsHorizontal
        className="menu-icon"
        value="Click to Open Popup"
        onClick={togglePopup}
      />

      {isOpen && (
        <Popup
          content={
            <EditPopup>
              <PopupEditContant>
                <PopupDelField>
                  <MdDeleteForever
                    className="del-icon"
                    onClick={delReplyhandler}
                  />
                  <p>Delet</p>
                </PopupDelField>
              </PopupEditContant>
            </EditPopup>
          }
          style={{ width: "150px", height: "auto" }}
        />
      )}
    </div>
  );
};

export default MessageReplyBar;
