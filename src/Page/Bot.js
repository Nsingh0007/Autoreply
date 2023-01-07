import React, { useEffect, useState } from "react";
import { loaderStore } from "../Store/Loader/LoaderStore";
import Card from "../Component/Card";
import SubHeader from "../Component/SubHeader";
import Popup from "../Component/Popup";
import { deleteBot } from "../utils/ApiClient/Action";
import { useNavigate } from "react-router-dom";
import { createNewBot, getAllBot } from "../utils/ApiClient/Action";
import AddEditmodal from "../Component/Modal/AddEditmodal";
import { GETBOT } from "../utils/ApiClient/apiEndPoints";
import { editBot } from "../utils/ApiClient/Action";
import { observer } from "mobx-react-lite";
const Bot = (props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [botName, setbotName] = useState("");
  const [isEdit, setIsEdit] = useState("");
  const [editID, setEditID] = useState("");
  const onAddBtnClick = () => {
    toggelModal();
  };
  useEffect(() => {
    getAllBot();
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

  const OnSubmitButton = async (id) => {
    var body = { name: botName };

    console.log("Editbutton", isEdit);
    if (isEdit === "Edit") {
      setIsEdit("");

      await editBot(body, editID);
      console.log("Editbuttonn", editID);
      setEditID("");
    } else {
      var apidata = createNewBot(body);
    }

    toggelModal();
  };
  const OnChangeInput = (e) => {
    setbotName(e.target.value);
  };

  const Botdelete = (id) => {
    console.log("deleteBot", id);
    var apiData = deleteBot(id);
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
        headerTitle={"Existing Bots"}
        addButtonTitle={"NEW BOT"}
        onAddBtnClick={onAddBtnClick}
      />
      <div className="Card-Container">
        <div className="card-field">
          {loaderStore?.initialState?.bot?.message?.map((bot) => (
            <Card
              bot={bot}
              toggelModal={toggelModal}
              onClick={() => navigate(`/messageset/${bot._id}`)}
              Botdelete={Botdelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(Bot);
