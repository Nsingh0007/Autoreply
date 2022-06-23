import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useLocation } from "react-router-dom";

import { Bot } from "../../mobx/MobxStore";
import MessageReplyList1 from "./MessageReplyList1";
import AddMessageReply from "../MessagReply/AddMessageReply";
import LoadingSpinner from "../../Component/Loader/Loader";
const MessageReply = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getMessageReply();
  }, [refresh]);

  const getMessageReply = async () => {
    try {
      setIsLoading(true);
      console.log("---GET REPLY ___>>>???????????", location.state.index);
      const response = await axios.get(
        `https://autoreplybackend.moreyeahs.in/api/message/getByBotId?botId=${location.state.index}`
      );
      console.log("RESPONSE DATA--<>>", response.data.message);
      Bot.setReplyMessageSet(response.data.message);
      setIsLoading(false);
    } catch (e) {
      console.log("API CALLING ERROR->", e);
      setIsLoading(false);
    }
  };

  const ReplyMessagehandler = async (uname) => {
    try {
      setIsLoading(true);
      let body = {
        msgList: [
          ...Bot.initialState.messageReply,
          { botId: location.state.index, messageTitle: uname },
        ],
      };
      await axios
        .post(
          "https://autoreplybackend.moreyeahs.in/api/message/createMessage",
          body
        )
        .then((res) => {
          setRefresh(!refresh);
          console.log("Posting data", res.data);

          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

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
                  <MessageReplyList1
                    users={Bot.initialState.messageReply}
                    getMessageReply={getMessageReply}
                  />
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
