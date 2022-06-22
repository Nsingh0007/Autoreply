import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AddMessage from "./AddMessage";
import { Bot } from "../../mobx/MobxStore";
import MessageListA from "../MeassageSet/MessageListA";
import LoadingSpinner from "../../Component/Loader/Loader";
import { observer } from "mobx-react";

const MessageSet = (props) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBotMsg();
  }, [Bot.initialState.refresh]);

  const getBotMsg = async () => {
    setIsLoading(true);
    console.log(
      "===>>>>GET MESSAGE SET BY BOT ID==>>>>>>>>",
      location.state.index
    );

    await axios
      .get(
        `https://autoreplybackend.moreyeahs.in/api/bot/getBotByBtId?btId=${location.state.index}`
      )
      .then((res) => {
        console.log(
          "GET MEESAGE SET DATA--->>>>>>>>>>>>>>>>>>>>>>>>>",
          res.data.message
        );
        Bot.setMessageSet(res.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const addMessageHandler = async (uname) => {
    setIsLoading(true);
    await axios
      .post("https://autoreplybackend.moreyeahs.in/api/bot/createbot", {
        title: uname,
        mobile: "1234567890",
        btId: location.state.index,
      })
      .then((res) => {
        getBotMsg();
        console.log("Posting data", res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));

    // var messageData = Bot.initialState.message;
    // Bot.setMessageSet([
    //   ...messageData,
    //   { name: uname, id: Math.random().toString() },
    // ]);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="main-container">
            <div className="Header-container ">
              <div>
                <AddMessage addMessageHandler={addMessageHandler} />
              </div>
              <div>
                {Bot.initialState.message.length > 0 && (
                  <MessageListA users={Bot.initialState.message} />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default observer(MessageSet);
