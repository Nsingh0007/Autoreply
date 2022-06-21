import React from "react";
import { Bot } from "../../mobx/MobxStore";
import { HiDotsHorizontal } from "react-icons/hi";
import { Card } from "../../Component/Style";
import {
  CardContainer,
  CardContent,
  CardField,
  MessageSetAdded,
} from "../Style/AddMessageStyle";

const MessageReplyList1 = (props) => {
  console.log("props", props.users);

  return (
    <CardContainer>
      <CardField>
        {props?.users?.map((user) => (
          <CardContent>
            <Card key={user.id}> {user?.name}</Card>

            <MessageSetAdded>
              <div>
                <HiDotsHorizontal
                  className="menu-icon"
                  value="Click to Open Popup"
                />
              </div>
            </MessageSetAdded>
          </CardContent>
        ))}
      </CardField>
    </CardContainer>
  );
};

export default MessageReplyList1;
