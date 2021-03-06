import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import axios, { Axios } from "axios";
import Popup from "../../../Component/_shared/Popup";
import Button from "../../../Component/CustomButton";
import BotPopup from "./BotPopup";
import { PopupInput } from "../../Style/AddMessageStyle";
import { Bot } from "../../../mobx/MobxStore";

const BotEdit = (props) => {
  console.log("ffffffffffffffffffffffffirst", props.user.title);

  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [editBotName, setEditBotName] = useState(props.user.title);
  const [refresh, setRefresh] = useState(false);
  const [botEdit, setBotEdit] = useState(props?.item);
  const deltogglePopup = () => {
    setIsDelOpen(!isDelOpen);
  };
  // useEffect(() => {
  //   props.getAllBots();
  // });
  const cancilhandel = () => {
    deltogglePopup();
  };

  const BotEdithandler = async (id) => {
    console.log("firstr", botEdit._id);
    await axios

      .put(
        `https://autoreplybackend.moreyeahs.in/api/bt/updateBtTable?_id=${botEdit._id}`,
        { title: editBotName }
      )
      .then(async (res) => {
        console.log(
          "GET MEESAGE SET DATA--->>>>>>>>>>>>>>>>>>>>>>>>>",
          res.data.message
        );
        await props.addUserHandler();
        props.getAllBots();
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  return (
    <div>
      {" "}
      <div>
        <div className="popup-edit-field">
          <FiEdit className="edit-icon" onClick={deltogglePopup} />
          <h3 style={{ color: "white" }}>Edit</h3>
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
                    <PopupInput
                      id="BotWord"
                      value={editBotName}
                      placeholder="Edit Bot Set "
                      type="text"
                      onChange={(e) => {
                        setEditBotName(e.target.value);
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
                        BotEdithandler(e.target.value);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="popup-Cancel-Button"
                      role="button"
                      style="cancil-button"
                      onClick={() => {
                        cancilhandel();
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
  );
};

export default BotEdit;
