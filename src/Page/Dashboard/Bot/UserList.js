import React, { useEffect, useState } from "react";

import { Card } from "../../../Component/_shared/Card";

import { CardContainer, CardField } from "../../../Page/Style/AddMessageStyle";
import { useNavigate } from "react-router-dom";

const UserList = (props) => {
  const navigate = useNavigate();
  console.log("props", props.bots);

  return (
    <CardContainer>
      <CardField>
        {props.bots.map((user, index) => (
          <Card
            key={user.id}
            onClick={() =>
              navigate(`/messageset`, { state: { index: user._id } })
            }
          >
            {user.title}
          </Card>
        ))}
      </CardField>
    </CardContainer>
  );
};

export default UserList;
