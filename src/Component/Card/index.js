import React, { useState } from "react";

import "./style.css";
// import MenueditModal from "../../Component/Modal/MenueditModal";
import MenueditModal from "../../Component/Modal/MenueditModal";
import { HiDotsHorizontal } from "react-icons/hi";
import Popup from "../Popup";
const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { bot, onClick } = props;
  const EditModal = () => { };
  const DelModal = () => {
    props.Botdelete(bot._id);

    setShowModal(!showModal);
  };
  const menuIconClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div key={bot._id}>
      <div className="card">
        <div className="hi-icon" onClick={() => menuIconClick()}>
          <HiDotsHorizontal
            className="menu-icon"
            onClick={() => setShowModal(!showModal)}
          />
          <Popup
            showModal={showModal}
            toggelModal={() => setShowModal(!showModal)}
          >
            <MenueditModal
              DelModal={DelModal}
              toggelModal={props.toggelModal}
              data={bot}
            />
          </Popup>
        </div>
        <div className="class-title" onClick={() => onClick()}>
          {bot.name ? bot.name : bot.reply}
        </div>
      </div>
    </div>
  );
};

export default Card;
