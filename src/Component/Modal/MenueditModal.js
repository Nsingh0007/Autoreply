import React, { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import AddEditmodal from "./AddEditmodal";
import "./Style.css";
import Popup from "../Popup";
const MenueditModal = ({ DelModal, toggelModal, Title = "Title", data }) => {
  var id = data._id;
  return (
    <div className="Menu-container">
      {/* <div>{Title}</div> */}
      <div onClick={() => DelModal()} className="menu-field">
        <div></div>
        <MdDeleteForever className="del-icon" />
        <h6>Delete</h6>
      </div>
      <div onClick={() => toggelModal("Edit", id)} className="menu-field">
        <FiEdit className="edit-icon" />

        <h6>Edit</h6>
      </div>
    </div>
  );
};
export default MenueditModal;
