import React, { useState } from "react";
import { Bot } from "../../mobx/MobxStore";
import Button from "../../Component/CustomButton";
import axios from "axios";
import {
  SubTextSet,
  SubHeaderField,
  SubHeaderContainer,
  ButtonField,
  PopupContant,
  PopupInputField,
  ReplyPopupHead,
  PopupInput,
} from "../Style/AddMessageStyle";
import LoadingSpinner from "../../Component/Loader/Loader";

import Popup from "../../Component/_shared/Popup";

const AddMessageReply = (props) => {
  const [replyMessageSet, setReplyMessageSet] = useState("");
  const [usernameErr, setusernameErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handelpopup = () => {};
  const ReplyMessagehandler = async (e) => {
    console.log("first");
    if (replyMessageSet.trim() === "") {
    } else {
      setIsLoading(true);
      props.ReplyMessagehandler(replyMessageSet);

      togglePopup();
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SubHeaderContainer>
            <SubHeaderField>
              <SubTextSet>A Message Sets 1</SubTextSet>
              <ButtonField>
                <Button
                  type="button"
                  value="Click to Open Popup"
                  onClick={togglePopup}
                  style="Reply-button"
                >
                  New Reply
                </Button>

                {isOpen && (
                  <Popup
                    content={
                      <>
                        <PopupContant>
                          <PopupInputField>
                            <ReplyPopupHead>Add New Reply</ReplyPopupHead>
                            <PopupInput
                              id="BotWord"
                              placeholder="Example Hello "
                              type="text"
                              onChange={(e) => {
                                setReplyMessageSet(e.target.value);
                              }}
                            />
                          </PopupInputField>
                          <Button
                            onClick={() => {
                              console.log("first");

                              ReplyMessagehandler();
                              // popupState.close();
                            }}
                            style="button-submit"
                          >
                            Submit
                          </Button>
                          <Button
                            role="button"
                            onClick={handelpopup}
                            style="button-cancil"
                          >
                            Cancel
                          </Button>
                        </PopupContant>
                      </>
                    }
                  />
                )}
              </ButtonField>
            </SubHeaderField>
          </SubHeaderContainer>
        </>
      )}
    </div>
  );
};

export default AddMessageReply;

// await axios
// .post(
//   "https://autoreplybackend.moreyeahs.in/api/message/createMessage",
//   {
//     messageTitle: replyMessageSet,
//   }
// )
// .then((res) => {
//   Bot.setReplyMessageSet(res.data);
//   console.log("Posting data", res.data);
//   props.AddMessageReplyHandler(replyMessageSet);
//   setIsLoading(false);
// })
// .catch((error) => {
//   console.log(error);
//   setIsLoading(false);
// });
