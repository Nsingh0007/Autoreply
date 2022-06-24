import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactiveUser, TextField } from "../Style/SettingStyle";

import Switch from "@mui/material/Switch";

import { Bot } from "../../mobx/MobxStore";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import {
  SettingContainer,
  SettingContant1,
  SettingContant2,
  SettingField,
  SettingField1,
  SettingFieldSleepTimer,
  SettingLabel,
  SettingMainContainer,
  SettingText,
} from "../Style/SettingStyle";
const label = { inputProps: { "aria-label": "Switch demo" } };
const AutoSetting = () => {
  const [isCallEnableReply, setIsCallEnableReply] = useState(false);
  const [isSMSEnableReply, setIsSMSEnableReply] = useState(false);
  const [isMMSEnableReply, setIsMMSEnableReply] = useState(false);

  const [delayResponse, setDelayResponse] = useState("");
  const [inActiveTimes, setInactiveTimer] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [disconnectTimes, setDisconnectTimer] = useState("");
  const [reativeUser, setReactiveUser] = useState("");

  const [MessageSetting, setMessageSetting] = useState("");

  useEffect(() => {
    // messageSetting();
    isGetMessage();
  }, []);

  const isGetMessage = async () => {
    try {
      let mobile = 1234567890;
      await axios
        .get(
          `https://autoreplybackend.moreyeahs.in/api/setting/getCreateSetting?mobile=${mobile}`
        )
        .then((res) => {
          console.log("is GET MESSAGE DATA", res.data.message);
          messageSetting(res.data.message);
          // Bot.setMessageSetting(body.res.data);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log("API CALLING ERROR", e);
    }
  };

  const messageSetting = async (item) => {
    setIsCallEnableReply(item?.isCallEnableReply);
    setIsMMSEnableReply(item?.isMMSEnableReply);
    setIsSMSEnableReply(item?.isSMSEnableReply);
    setDelayResponse(item?.delayResponse);
    setInactiveTimer(item?.inActiveTimes);
    setDisconnectTimer(item?.disconnectTimes);
    setReactiveUser(item?.reativeUser);
    setDefaultText(item?.defaultText);
  };

  return (
    <SettingMainContainer>
      <SettingContainer>
        <SettingField>
          <SettingLabel>AUTO REPLY TRIGGERS</SettingLabel>
          <SettingContant1>
            <div>
              <SettingText>Enable Call Reply</SettingText>
            </div>
            <div>
              {/* <Switch
                {...label}
                defaultChecked
                style={{ color: "red" }}
                color="error"
                value={isCallEnableReply}
              /> */}
              <Switch {...label} defaultChecked />
            </div>
          </SettingContant1>
          <SettingContant1>
            <div>
              <SettingText>Enable SMS Reply</SettingText>
            </div>
            <div>
              {/* <Switch
                {...label}
                defaultChecked
                style={{ color: "red" }}
                color="error"
                value={isSMSEnableReply}
              /> */}
              <Switch {...label} defaultChecked />
            </div>
          </SettingContant1>
          <SettingContant1>
            <div>
              <SettingText>Enable MMS Reply</SettingText>
            </div>
            <div>
              {/* <Switch
                {...label}
                defaultChecked
                style={{ color: "red" }}
                color="error"
                value={isMMSEnableReply}
              /> */}
              <Switch {...label} defaultChecked />
            </div>
          </SettingContant1>

          <SettingLabel>Delay Response</SettingLabel>
          <SettingContant2>
            <div>
              <SettingText>Delay Response time</SettingText>
            </div>
            <div>
              <TextField
                style={{ width: "120px" }}
                placeholder="120sec"
                value={delayResponse}
              />
            </div>
          </SettingContant2>
        </SettingField>
        <SettingField1>
          <SettingFieldSleepTimer>
            <SettingLabel>Sleep Timer</SettingLabel>
            <SettingContant2>
              <div>
                <SettingText>Default Text</SettingText>
              </div>
              <div>
                <TextField placeholder=" Mins" value={defaultText} />
              </div>
            </SettingContant2>
            <SettingContant2>
              <div>
                <SettingText>Inactive Times</SettingText>
              </div>
              <div>
                <TextField
                  placeholder="Are You Available ?"
                  value={inActiveTimes}
                />
              </div>
            </SettingContant2>
            <SettingContant2>
              <div>
                <SettingText>Disconnection Timer</SettingText>
              </div>
              <div>
                <TextField placeholder=" Mins" value={disconnectTimes} />
              </div>
            </SettingContant2>
            <SettingLabel>Purge</SettingLabel>
            <SettingContant2>
              <div>
                <SettingText>Reactive Users</SettingText>
              </div>
              <ReactiveUser>
                <TextField
                  style={{ width: "120px", paddingLeft: "30px" }}
                  placeholder=" Mins"
                  value={reativeUser}
                />
                <IoMdArrowDroprightCircle className="arrow-setting" />
              </ReactiveUser>
            </SettingContant2>
          </SettingFieldSleepTimer>
        </SettingField1>
      </SettingContainer>
    </SettingMainContainer>
  );
};

export default AutoSetting;
