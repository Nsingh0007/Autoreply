import React, { useEffect, useState } from "react";
import { CardContent, Dot } from "../../../Page/Style/AddMessageStyle";
import { Card } from "../../../Component/_shared/Card";
// import BotPopup from "./BotPopup";

import { CardContainer, CardField } from "../../../Page/Style/AddMessageStyle";
import { useNavigate } from "react-router-dom";
import BotPopup from "./BotPopup";

const UserList = (props) => {
  const navigate = useNavigate();
  // console.log(
  //   "propshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkt",
  //   JSON.stringify(props.users)
  // );

  return (
    <CardContainer>
      <CardField>
        {props.bots.length > 0 && (
          <>
            {props?.bots?.map((user, index) => (
              <CardContent>
                <Card
                  style={{
                    borderRight: "none",
                    borderRadius: "15px 0px 0px 15px",
                  }}
                  key={user.id}
                  onClick={() =>
                    navigate(`/messageset`, { state: { index: user._id } })
                  }
                >
                  {user.title}
                </Card>
                <Dot>
                  <BotPopup
                    AddUser={props.AddUser}
                    user={user}
                    addUserHandler={props.addUserHandler}
                  />
                </Dot>
              </CardContent>
            ))}
          </>
        )}
      </CardField>
    </CardContainer>
  );
};

export default UserList;
