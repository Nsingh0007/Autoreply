import React, { useState } from "react";
import axios from "axios";

import { CardField, CardContainer } from "../../Component/Style";

import { Card } from "../../Component/Style";
import { useNavigate } from "react-router-dom";
import MessageBar from "./MessageBar";

import { CardContent, MessageSetAdded } from "../Style/AddMessageStyle";

const MessageList = (props) => {
  const navigate = useNavigate();
  console.log("props", props.users);

  return (
    <CardContainer>
      <CardField>
        {props.users.map((user, index) => (
          <CardContent>
            <Card
              key={user.id}
              onClick={() =>
                navigate("/messagereply", { state: { index: user._id } })
              }
            >
              {user.title}
            </Card>

            <MessageSetAdded>
              <MessageBar user={user} />
            </MessageSetAdded>
          </CardContent>
        ))}
      </CardField>
    </CardContainer>
  );
};

export default MessageList;
