import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Popup from "../../Component/_shared/Popup";
import Button from "../../Component/CustomButton";
import { Bot } from "../../mobx/MobxStore";
import axios from "axios";
const MessageEdit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const deltogglePopup = () => {
    setIsDelOpen(!isDelOpen);
  };

  const togglePopup = () => {};
  const handelpopup = async (props) => {
    console.log("first", props);
    await axios
      .update(`https://autoreplybackend.moreyeahs.in/api/bot/updatebot=`, {
        title: editName,
        mobile: "1234567890",
      })
      .then((res) => {
        console.log(
          "GET MEESAGE SET DATA--->>>>>>>>>>>>>>>>>>>>>>>>>",
          res.data.message
        );
        Bot.setEditName(res.data.message);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="popup-edit-field">
        <FiEdit className="edit-icon" onClick={deltogglePopup} />
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
                    onChange={(e) => {
                      setEditName(e.target.value);
                    }}
                  />
                </div>
                <div className="edit-field-button">
                  <Button
                    className="popupButton"
                    onClick={handelpopup}
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
    </div>
  );
};

export default MessageEdit;
