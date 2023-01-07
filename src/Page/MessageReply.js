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
import { toJS } from "mobx";

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

  const toggelModal = (value, id) => {
    console.log("togel", value, id);
    if (value === "Edit") {
      setEditID(id);
      setIsEdit(value);
    }

    setShowModal(!showModal);
  };
  // const menuIconClick = () => {};

  const OnSubmitButton = async () => {
    console.log("onsum", toJS(loaderStore?.initialState?.messageReplySet))
    let body = {
      messageId: loaderStore?.initialState?.messageReplySet._id,
      reply: messageReplySetadd,
    }
    let Finalbody = {
      reply: messageReplySetadd,
    };


    if (isEdit === "Edit") {
      setIsEdit("");
      await editMessageReplySet(Finalbody, editID, id);
      setEditID("");
    } else {
      var apidata = await addNewMessageReplySet(body, id);
      console.log("moreyeahsssssssssssss", body);
    }
    toggelModal();

  };

  const OnChangeInput = (e) => {
    setMessageReplySetadd(e.target.value);
  };

  const MessageReplyDeleteSet = (_id,
  ) => {
    console.log("messageDeleteReply", id);
    var apidata = deleteMessageReply(_id, id);
  };

  return (
    <div>
      <Popup showModal={showModal} toggelModal={() => toggelModal()}>
        <AddEditmodal
          popupTitle={"New Bot"}
          OnChangeInput={(e) => OnChangeInput(e)}
          OnSubmitButton={() => OnSubmitButton()}
          toggelModal={(value, id) => toggelModal(value, id)}
        />
      </Popup>
      <SubHeader
        headerTitle={"A Message Sets 1"}
        addButtonTitle={"New Reply"}
        onAddBtnClick={() => onAddBtnClick()}
        toggelModal={(value, id) => toggelModal(value, id)}
      />
      <div className="Card-Container">
        <div className="card-field">
          {loaderStore?.initialState?.messageReplySet?.replySets?.map(
            (messageReplySet) => (
              <Card
                bot={messageReplySet}
                toggelModal={(value, id) => toggelModal(value, id)}
                Botdelete={(id) => MessageReplyDeleteSet(id)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(MessageReply);
