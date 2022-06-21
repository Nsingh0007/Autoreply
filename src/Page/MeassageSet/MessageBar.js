import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import Popup from "../../Component/_shared/Popup";
import MessageList from "./MessageListA";
import MessageEdit from "./MessageEdit";
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

const MessageBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [, set] = useState("");
  const deltogglePopup = () => {
    setIsDelOpen(!isDelOpen);
  };

  useEffect(() => {
    delhandler();
  }, []);

  const delhandler = async () => {
    await axios
      .del(`https://autoreplybackend.moreyeahs.in/api/bot/deletebot=`)
      .then((res) => {
        console.log("Posting data", res.data.message);
        Bot.setMessageSet(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  const handelpopup = () => {
    deltogglePopup("");
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
                  <MdDeleteForever className="del-icon" onClick={delhandler} />
                  <p>Delet</p>
                </PopupDelField>

                <div>
                  <MessageEdit />
                </div>
              </PopupEditContant>
            </EditPopup>
          }
          style={{ width: "150px", height: "auto" }}
        />
      )}
    </div>
  );
};

export default MessageBar;
