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
import { toJS } from "mobx";
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
      name: messageSetadd,
      botId: id,
    };
    var bodyy = {
      name: messageSetadd,


    };

    if (isEdit === "Edit") {
      setIsEdit("");
      //  console.log("Editbutton", isEdit);
      editMessageSet(bodyy, editID, id);


      setEditID("");
    } else {
      var apidata = addNewMessageSet(body, id);
      console.log("moreyeahsssssssssssss", body, id);
    }

    toggelModal();
  };


  const moveTo = (item) => {
    loaderStore.setMessageReplydata(item
    )
    navigate(`/messagereply/${id}`)
    console.log("itemMessage", id)
  }


  // const menuIconClick = () => {};
  const onSettingClick = () => {
    navigate(`/autosetting/${id}`);
  };
  const OnChangeInput = (e) => {
    setMessageSetadd(e.target.value);
  };

  const MessageDelete = async (_id) => {


    console.log("messageDelete", id);
    var apidata = await deleteMessage(_id, id);
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
              onClick={() => moveTo(toJS(messageSet))}
              Botdelete={MessageDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(MessageSet);
