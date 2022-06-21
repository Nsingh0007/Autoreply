import React, { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import { CardField, CardContainer } from "../../Component/Style";
import Popup from "../../Component/_shared/Popup";
// import { Card } from "../../Component/Style";
import { Card } from "../../Component/Style";
import { useNavigate } from "react-router-dom";
import MessageBar from "./MessageBar";

import { CardContent, MessageSetAdded } from "../Style/AddMessageStyle";

const MessageList = (props) => {
  const navigate = useNavigate();
  console.log("props", props.users);
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const deltogglePopup = () => {
    setIsDelOpen(!isDelOpen);
  };

  const handelpopup = () => {
    deltogglePopup("");
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
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
              <MessageBar />
            </MessageSetAdded>
          </CardContent>
        ))}
      </CardField>
    </CardContainer>
  );
};

export default MessageList;
