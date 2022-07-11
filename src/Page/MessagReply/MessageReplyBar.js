import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageRelyEdit from "./MessageRelyEdit";
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
  const [item, setItem] = useState(props?.user);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  console.log("hellooooo", JSON.stringify(props.user));
  const delReplyhandler = async (id) => {
    console.log("mota ", id);
    await axios
      .delete(
        `https://autoreplybackend.moreyeahs.in/api/message/deleteById?_id=${props.user._id}`
      )
      .then((res) => {
        console.log(
          "delt reply message reply ===>>>>>>>>>>>>>>>>>>",
          res.data,
          Bot
        );
        props.getMessageReply();
        togglePopup();
      })
      .catch((err) => console.log(err));
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
                  <p>Delete</p>
                </PopupDelField>
                <div>
                  <MessageRelyEdit
                    // item={item}
                    getMessageReply={props.getMessageReply}
                    // AddUser={props.AddUser}
                    user={props.user}
                  />
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

export default MessageReplyBar;
