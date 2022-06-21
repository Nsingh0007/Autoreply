import React, { useState, useEffect } from "react";

import UserList from "./Bot/UserList";
import axios from "axios";
import AddUser from "./Bot/AddUser";
import { Bot } from "../../mobx/MobxStore";
import { observer } from "mobx-react";
import LoadingSpinner from "../../Component/Loader/Loader";
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://autoreplybackend.moreyeahs.in/api/bt/getBt")
      .then((res) => {
        console.log("Posting data", res.data.message);
        Bot.setBotName(res.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const [usersList, setUsersList] = useState([
    { name: "bot A", id: Math.random().toString() },
  ]);

  const addUserHandler = (uname) => {
    var botData = Bot.initialState.bot;
    Bot.setBotName([...botData, { name: uname, id: Math.random().toString() }]);
    setUsersList((prevUsers) => {
      return [...prevUsers, { name: uname, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <AddUser addUserHandler={addUserHandler} />
          </div>
          <div>
            {Bot.initialState.bot.length > 0 && (
              <UserList bots={Bot.initialState.bot} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default observer(Dashboard);
