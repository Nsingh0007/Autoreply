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
    getAllBots();
  }, []);

  const getAllBots = async () => {
    try {
      setIsLoading(true);
      await axios
        .get("https://autoreplybackend.moreyeahs.in/api/bt/getBt")
        .then((res) => {
          console.log("GET BOAT DATA --?>>>>>>>>>>>>>", res.data.message);
          Bot.setBotName(res.data.message);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const addUserHandler = (uname) => {
    var botData = Bot.initialState.bot;
    Bot.setBotName([...botData, { name: uname, id: Math.random().toString() }]);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <AddUser addUserHandler={addUserHandler} getAllBots={getAllBots} />
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
