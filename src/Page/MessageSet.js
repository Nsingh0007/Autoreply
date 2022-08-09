import React, { useEffect, useState } from "react";
import Popup from "../Component/Popup";
import { loaderStore } from "../Store/Loader/LoaderStore";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Component/Card";

import SubHeader from "../Component/SubHeader";
import AddEditmodal from "../Component/Modal/AddEditmodal";
import { useLocation } from "react-router-dom";
import {
  getMessageSet,
  addNewMessageSet,
  deleteMessage,
  editMessageSet,
} from "../utils/ApiClient/Action";

import { observer } from "mobx-react-lite";
const MessageSet = (props) => {
  const location = useLocation();
  let { id } = useParams();
  console.log("ID FROM PAREMSssssssssssssssssss", id);

  const navigate = useNavigate();
  const [editID, setEditID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [messageSetadd, setMessageSetadd] = useState("");
  const [isEdit, setIsEdit] = useState("");
  const onAddBtnClick = () => {
    toggelModal();
  };
  useEffect(() => {
    getMessageSet(id);
  }, [id]);

  const toggelModal = (value, id) => {
    if (value === "Edit") {
      setEditID(id);
      setIsEdit(value);
    }

    setShowModal(!showModal);
  };
  const OnSubmitButton = () => {
    var body = {
      title: messageSetadd,

      mobile: "1234567890",
      btId: id,
    };
    var bodyy = {
      title: messageSetadd,

      mobile: "1234567890",
    };

    if (isEdit === "Edit") {
      setIsEdit("");
      //  console.log("Editbutton", isEdit);
      editMessageSet(bodyy, editID, id);

      console.log("Editbutton", bodyy);
      console.log("Editbuttonnnnnnnnnn", editID);
      setEditID("");
    } else {
      var apidata = addNewMessageSet(body, id);
      console.log("moreyeahsssssssssssss", body);
    }

    toggelModal();
  };

  // const menuIconClick = () => {};
  const onSettingClick = () => {
    navigate("/autosetting");
  };
  const OnChangeInput = (e) => {
    setMessageSetadd(e.target.value);
  };

  const MessageDelete = (_id) => {
    console.log("messageDelete", id);
    var apidata = deleteMessage(_id, id);
  };

  return (
    <div>
      <Popup showModal={showModal} toggelModal={toggelModal}>
        <AddEditmodal
          popupTitle={"New Bot"}
          OnChangeInput={OnChangeInput}
          OnSubmitButton={OnSubmitButton}
          toggelModal={toggelModal}
          onSettingClick={onSettingClick}
        />
      </Popup>

      <SubHeader
        headerTitle={"Bot Message set"}
        addButtonTitle={"NEW Set"}
        onAddBtnClick={onAddBtnClick}
        toggelModal={toggelModal}
        onSettingClick={onSettingClick}
        showSettingBtn={true}
      />
      <div className="Card-Container">
        <div className="card-field">
          <div className="Card-content"></div>
          {loaderStore?.initialState?.messageSet?.message?.map((messageSet) => (
            <Card
              bot={messageSet}
              toggelModal={toggelModal}
              onClick={() => navigate(`/messagereply/${messageSet._id}`)}
              Botdelete={MessageDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(MessageSet);
