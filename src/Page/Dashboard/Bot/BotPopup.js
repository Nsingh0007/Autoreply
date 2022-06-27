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
  const handelpopup = () => {
    togglePopup();
  };

  const Botdelhandler = async (id) => {
    await axios
      .delete(
        `https://autoreplybackend.moreyeahs.in/api/bt/deleteBtById?_id=${item._id}`
      )

      .then((res) => {
        console.log(
          "delt reply message reply ===>>>>>>>>>>>>>>>>>>",
          res.data,
          Bot
        );
        props.getAllBots();
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
                    //  onClick={() => Botdelhandler(item?._id)}
                    onClick={() => {
                      Botdelhandler(item?._id);

                      // alert(Botdelhandler);
                    }}
                  />
                  <h3>Dele</h3>
                </PopupDelField>
                <div>
                  <BotEdit item={item} getAllBots={props.getAllBots} />
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
