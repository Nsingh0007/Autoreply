import React, { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Popup from "../../Component/_shared/Popup";
import Button from "../../Component/CustomButton";
import { PopupInput } from "../Style/AddMessageStyle";
import axios, { Axios } from "axios";
import { Bot } from "../../mobx/MobxStore";
const MessageRelyEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [editReplyBotName, setEditReplyBotName] = useState();
  // const [refresh, setRefresh] = useState(false);
  const [botEdit, setBotEdit] = useState();
  const deltogglePopup = () => {
    setIsDelOpen(!isDelOpen);
  };

  const cancilReplyhandel = () => {
    deltogglePopup();
  };

  const BotEditReplyhandler = async (id) => {
    console.log("hell", JSON.stringify(props.user._id));
    await axios.put(
      `https://autoreplybackend.moreyeahs.in/api/message/updateMessageSet?_id=${props.user._id}'`,
      { title: editReplyBotName }
    );

    console
      .log("first", id)
      .then(async (res) => {
        console.log(
          "UPDATE SET MEESAGE SET DATA--->>>>>>>>>>>>>>>>>>>>>>>>>",
          res.data.message
        );
        props.getMessageReply();
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };
  return (
    <div>
      <div>
        {" "}
        <div>
          <div className="popup-edit-field">
            <FiEdit className="edit-icon" onClick={deltogglePopup} />

            <h3>Edit</h3>
          </div>
          {isDelOpen && (
            <Popup
              content={
                <div className=" edit-popup">
                  <div className="popup-contant">
                    <div className="edit-field">
                      <label className="reply-popup-head">Edit</label>
                      <PopupInput
                        id="BotWord"
                        value={editReplyBotName}
                        placeholder="Edit Bot Set "
                        type="text"
                        onChange={(e) => {
                          setEditReplyBotName(e.target.value);
                        }}
                        style={{
                          width: "160px",
                          height: "40px",
                          marginBottom: "5px",
                          Color: "blcak",
                        }}
                      />
                    </div>
                    <div className="edit-field-button">
                      <Button
                        className="popupButton"
                        style="edit-button"
                        onClick={(e) => {
                          BotEditReplyhandler(e.target.value);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        className="popup-Cancel-Button"
                        role="button"
                        style="cancil-button"
                        onClick={() => {
                          cancilReplyhandel();
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              }
              style={{
                height: "auto",
                width: "auto",
              }}
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default MessageRelyEdit;
