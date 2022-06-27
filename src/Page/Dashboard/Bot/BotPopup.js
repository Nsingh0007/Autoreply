import React, { useEffect, useState } from "react";

import { HiDotsHorizontal } from "react-icons/hi";
import Popup from "../../../Component/_shared/Popup";
import axios from "axios";
import {
  EditPopup,
  PopupDelField,
  PopupEditContant,
} from "../../Style/AddMessageStyle";
import { MdDeleteForever } from "react-icons/md";
import BotEdit from "./BotEdit";
import { Bot } from "../../../mobx/MobxStore";

const BotPopup = (props) => {
  const [isOpen, setIsOpen] = useState("");
  const [setDelt, setSetDelt] = useState("");
  const [item, setItem] = useState(props?.user);
  const [refresh, setRefresh] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handelpopup = () => {
    togglePopup();
  };

  // useEffect(() => {
  //   props.getAllBots();
  // });

  const Botdelhandler = async (id) => {
    await axios
      .delete(
        `https://autoreplybackend.moreyeahs.in/api/bt/deleteBtById?_id=${item._id}`
      )
      .then(async (res) => {
        console.log(
          "delt reply message reply ===>>>>>>>>>>>>>>>>>>",
          res.data,
          Bot
        );
        await props.addUserHandler();
        setRefresh(!refresh);
        togglePopup();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {" "}
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
                    onClick={() => {
                      Botdelhandler(item?._id);
                    }}
                  />
                  <h3>Delete</h3>
                </PopupDelField>
                <div>
                  <BotEdit item={item} addUserHandler={props.addUserHandler} />
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

export default BotPopup;
