import React from "react";
import { Bot } from "../../mobx/MobxStore";
import axios from "axios";
import { HiDotsHorizontal } from "react-icons/hi";
import { Card } from "../../Component/Style";
import MessageReplyBar from "./MessageReplyBar";
import {
  CardContainer,
  CardContent,
  CardField,
  MessageSetAdded,
} from "../Style/AddMessageStyle";
import { ClickAwayListener } from "@mui/base";

const MessageReplyList1 = (props) => {
  console.log("props", props.users);

  // useEffect(() => {
  //   delMsgset();
  // }, []);
  const DeltReplyMessage = async (id) => {
    console.log("first", id);

    await axios
      .delete(
        `https://autoreplybackend.moreyeahs.in/api/message/deleteMessageSet?_id=${id}`
      )
      .then((res) => {
        console.log("deltReply bot===>>>>>>>>>>>>>>>>>>", res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardContainer>
      <CardField>
        {props?.users?.map((user) => (
          <CardContent>
            <Card key={user.id}>{user?.messageTitle}</Card>

            <MessageSetAdded>
              <MessageReplyBar user={user} userr={DeltReplyMessage} />
              {/* <div>
                <HiDotsHorizontal
                  className="menu-icon"
                  value="Click to Open Popup"
                />
              </div> */}
            </MessageSetAdded>
          </CardContent>
        ))}
      </CardField>
    </CardContainer>
  );
};

export default MessageReplyList1;
