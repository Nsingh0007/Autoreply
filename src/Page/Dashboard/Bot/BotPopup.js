import React, { useState } from "react";
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
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const Botdelhandler = async (id) => {
    console.log("");
    await axios
      .delete(
        `https://autoreplybackend.moreyeahs.in/api/bot/deletebot_id=${id}`
      )

      .then((res) => {
        console.log(
          "delt reply message reply ===>>>>>>>>>>>>>>>>>>",
          res.data,
          Bot
        );
        getAllBots();
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
                    //  onClick={() => Botdelhandler(item?._id)}
                    onClick={() => Botdelhandler()}
                  />
                  <h3>Delete</h3>
                </PopupDelField>
                <div>
                  <BotEdit getAllBots={props.getAllBots} />
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

// 20/06 =>integrate messageSet Delete & Put api , change design popup

// 21/06 => integrate messageReply Delete , error hendling

// 22/06 =>change setting design and error hendling Bot card

// 23/06 =>  integrate Setting api and setting change design

// 24/06 => integrate bot Delete & Put api , design popup (edit & delete)
