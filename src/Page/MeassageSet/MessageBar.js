import React, { useEffect, useState } from "react";
import axios from "axios";

import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { observer } from "mobx-react-lite";
import Button from "../../Component/CustomButton";

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
  // console.log(
  //   "================================>",
  //   JSON.stringify(props?.user?._id)
  // );
  console.log("delt bot===>>>>>>>>>>>>>>>>>>", JSON.stringify(props.user._id));

  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [item, setItem] = useState(props?.user);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const delhandler = async (id) => {
    console.log("first", id);
    await axios
      .delete(
        `https://autoreplybackend.moreyeahs.in/api/bot/deletebot?_id=${props.user._id}`
      )
      .then((res) => {
        console.log("delt reply bot===>>>>>>>>>>>>>>>>>>", res.data, Bot);
        // Bot.setRefresh(!Bot.initialState.refresh);
        props.getBotMsg();
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
                    onClick={() => delhandler(item?._id)}
                  />
                  <h3>Delete</h3>
                </PopupDelField>
                <div>
                  <MessageEdit
                    user={props.user}
                    item={item}
                    getBotMsg={props.getBotMsg}
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

export default observer(MessageBar);
