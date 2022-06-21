import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Bot } from "../../mobx/MobxStore";
import MessageReplyList1 from "./MessageReplyList1";
import AddMessageReply from "../MessagReply/AddMessageReply";
import LoadingSpinner from "../../Component/Loader/Loader";
const MessageReply = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMessageReply();
  }, []);

  const getMessageReply = async () => {
    setIsLoading(true);
    await axios
      .get(
        `https://autoreplybackend.moreyeahs.in/api/bot/getBotByBtId?btId=${location.state.index}`
      )
      .then((res) => {
        console.log("Posting data", res.data);
        Bot.setReplyMessageSet(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const ReplyMessagehandler = async (uname) => {
    setIsLoading(true);
    let body = {
      msgList: [{ botId: location.state.index, messageTitle: uname }],
    };
    await axios
      .post(
        "https://autoreplybackend.moreyeahs.in/api/message/createMessage",
        body
      )
      .then((res) => {
        getMessageReply();
        // Bot.setReplyMessageSet(res.data);
        console.log("Posting data", res.data);
        // props.AddMessageReplyHandler(replyMessageSet);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    // var messageReplyData = Bot.initialState.messageReply;
    // Bot.setMessageSet([
    //   ...messageReplyData,
    //   { name: uname, id: Math.random().toString() },
    // ]);
    // setMessageReplyList((prevUsers) => {
    //   return [...prevUsers, { name: uname, id: Math.random().toString() }];
    // });
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
                <AddMessageReply ReplyMessagehandler={ReplyMessagehandler} />
              </div>
              <div>
                {Bot.initialState.messageReply.length > 0 && (
                  <MessageReplyList1 users={Bot.initialState.messageReply} />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageReply;
