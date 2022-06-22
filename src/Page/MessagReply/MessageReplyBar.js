import React, { useEffect, useState } from "react";
import axios from "axios";

import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import Button from "../../Component/CustomButton";

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
                {/* <div> */}
                {/* <MessageEdit /> */}
                {/* <div> */}
                <div className="popup-edit-field">
                  <FiEdit className="edit-icon" />
                  <p>Edit</p>
                </div>
                {isDelOpen && (
                  <Popup
                    content={
                      <div className=" edit-popup">
                        <div
                          className="popup-contant"
                          style={
                            {
                              // flexWrap: "wrap",
                            }
                          }
                        >
                          <div className="edit-field">
                            <label className="reply-popup-head">Edit</label>
                            <input
                              id="BotWord"
                              className="popupInput"
                              placeholder="Example Message Set 2"
                              type="text"
                              style={{
                                width: "200px",
                                height: "40px",
                                marginBottom: "10px",
                              }}
                              // onChange={(e) => {
                              //   setBotName(e.target.value);
                              // }}
                            />
                          </div>
                          <div className="edit-field-button">
                            <Button
                              className="popupButton"
                              // onClick={handelpopup}
                              style="edit-button"
                            >
                              Edit
                            </Button>
                            <Button
                              className="popup-Cancel-Button"
                              role="button"
                              style="cancil-button"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    }
                    style={{
                      height: "190px",
                      width: "auto",
                    }}
                  />
                )}{" "}
                {/* </div> */}
                {/* </div> */}
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
