import React, { useEffect, useState } from "react";
import Popup from "../Component/Popup";
import { loaderStore } from "../Store/Loader/LoaderStore";
import Card from "../Component/Card";

import { useLocation, useParams } from "react-router-dom";
import SubHeader from "../Component/SubHeader";
import AddEditmodal from "../Component/Modal/AddEditmodal";

import "../Component/Card/style.css";
import {
  getMessageReplySet,
  addNewMessageReplySet,
  deleteMessageReply,
  editMessageReplySet,
} from "../utils/ApiClient/Action";
import { observer } from "mobx-react-lite";

const MessageReply = () => {
  const location = useLocation();
  let { id } = useParams();
  const [messageReplySetadd, setMessageReplySetadd] = useState("");
  const [editID, setEditID] = useState("");
  const [isEdit, setIsEdit] = useState("");

  const [showModal, setShowModal] = useState(false);
  const onAddBtnClick = () => {
    toggelModal();
  };
  useEffect(() => {
    getMessageReplySet(id);
  }, []);

  const toggelModal = (value, id) => {
    console.log("togel", value, id);
    if (value === "Edit") {
      setEditID(id);
      setIsEdit(value);
    }

    setShowModal(!showModal);
  };
  // const menuIconClick = () => {};

  const OnSubmitButton = () => {
    let body = [];
    loaderStore.initialState.messageReplySet.message.map((item) => {
      var botList = {
        botId: item.botId,
        messageTitle: item.messageTitle,
      };
      body.push(botList);
    });
    let Finalbody = {
      msgList: [...body, { botId: id, messageTitle: messageReplySetadd }],
    };
    console.log("finalbody", Finalbody);

    if (isEdit === "Edit") {
      setIsEdit("");
      //  console.log("Editbutton", isEdit);

      editMessageReplySet({ title: messageReplySetadd }, editID, id);

      setEditID("");
    } else {
      addNewMessageReplySet(Finalbody, id);
      console.log("moreyeahsssssssssssss", body);
    }
    toggelModal();
  };

  const OnChangeInput = (e) => {
    setMessageReplySetadd(e.target.value);
  };

  const MessageReplyDeleteSet = (_id) => {
    console.log("messageDeleteReply", id);
    var apidata = deleteMessageReply(_id, id);
  };

  return (
    <div>
      <Popup showModal={showModal} toggelModal={toggelModal}>
        <AddEditmodal
          popupTitle={"New Bot"}
          OnChangeInput={OnChangeInput}
          OnSubmitButton={OnSubmitButton}
          toggelModal={toggelModal}
        />
      </Popup>
      <SubHeader
        headerTitle={"A Message Sets 1"}
        addButtonTitle={"New Reply"}
        onAddBtnClick={onAddBtnClick}
        toggelModal={toggelModal}
      />
      <div className="Card-Container">
        <div className="card-field">
          {loaderStore?.initialState?.messageReplySet?.message?.map(
            (messageReplySet) => (
              <Card
                bot={messageReplySet}
                // toggelModal={toggelModal}
                Botdelete={MessageReplyDeleteSet}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(MessageReply);
