import React, { useEffect, useState } from "react";
import Button from "../../../Component/CustomButton/index";
import {
  ButtonField,
  SubHeaderContainer,
  SubText,
  SubHeaderField,
  PopupContant,
  ReplyPopupHead,
  PopupInput,
  PopupInputField,
  PopupBtnField,
} from "../../Style/AddMessageStyle";
import LoadingSpinner from "../../../Component/Loader/Loader";
import { Bot } from "../../../mobx/MobxStore";
import { observer } from "mobx-react-lite";
import axios from "axios";
import Popup from "../../../Component/_shared/Popup";

const AddUser = (props) => {
  const { refresh, setRefresh } = props;

  const [botName, setBotName] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handelpopup = () => {
    togglePopup();
  };
  // useEffect(() => {
  //   addBotHandler();
  // }, []);

  const addBotHandler = async (e) => {
    if (botName.trim() === "") {
    } else {
      setIsLoading(true);
      await axios
        .post("https://autoreplybackend.moreyeahs.in/api/bt/createBt", {
          title: botName,
        })
        .then((res) => {
          // Bot.setBotName(res.data);
          // props.getAllBots()
          console.log("Posting data", res.data);
          props.addUserHandler(botName);

          // setRefresh(!refresh);
          setIsLoading(false);
          setRefresh(!refresh);
          togglePopup();
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SubHeaderContainer>
          <SubHeaderField>
            <SubText>Existing Bot</SubText>
            <ButtonField>
              <Button
                type="button"
                value="Click to Open Popup"
                onClick={togglePopup}
                style="button"
              >
                New Bot
              </Button>

              {isOpen && (
                <Popup
                  content={
                    <>
                      <PopupContant>
                        <PopupInputField>
                          <ReplyPopupHead>New Bot</ReplyPopupHead>
                          <PopupInput
                            id="BotWord"
                            placeholder="Example Bot B"
                            type="text"
                            onChange={(e) => {
                              setBotName(e.target.value);
                            }}
                          />
                        </PopupInputField>
                        <PopupBtnField>
                          <Button
                            role="button"
                            onClick={() => addBotHandler()}
                            style="button-submit"
                          >
                            Submit
                          </Button>
                          <Button
                            role="button"
                            onClick={() => {
                              handelpopup();
                            }}
                            style="button-cancil"
                          >
                            Cancel
                          </Button>
                        </PopupBtnField>
                      </PopupContant>
                    </>
                  }
                />
              )}
            </ButtonField>
          </SubHeaderField>
        </SubHeaderContainer>
      )}
    </div>
  );
};

export default observer(AddUser);

/* CSS */
