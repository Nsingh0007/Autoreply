import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactiveUser, TextField, TextFieldPlace } from "../Style/SettingStyle";
import Button from "../../Component/CustomButton";
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
        <div className="exm">
          <div className="ex">
            <SettingField>
              <SettingLabel>AUTO REPLY TRIGGERS</SettingLabel>
              <SettingContant1>
                <div>
                  <SettingText>Enable Call Reply</SettingText>
                </div>
                <div>
                  <Switch
                    {...label}
                    defaultChecked
                    style={{ color: "red" }}
                    color="error"
                    value={isCallEnableReply}
                  />
                </div>
              </SettingContant1>
              <SettingContant1>
                <div>
                  <SettingText>Enable SMS Reply</SettingText>
                </div>
                <div>
                  <Switch
                    {...label}
                    defaultChecked
                    style={{ color: "red" }}
                    color="error"
                    value={isSMSEnableReply}
                  />
                </div>
              </SettingContant1>
              <SettingContant1>
                <div>
                  <SettingText>Enable MMS Reply</SettingText>
                </div>
                <div>
                  <Switch
                    {...label}
                    defaultChecked
                    style={{ color: "red" }}
                    color="error"
                    value={isMMSEnableReply}
                  />
                </div>
              </SettingContant1>

              <SettingLabel>Delay Response</SettingLabel>
              <SettingContant2>
                <div>
                  <SettingText>Delay Response time</SettingText>
                </div>
                <div className="setting-text-field">
                  <TextField
                    style={{ width: "45px" }}
                    placeholder="sec"
                    value={delayResponse}
                  />
                  <TextFieldPlace style={{ width: "70px" }}>Sec</TextFieldPlace>
                </div>
              </SettingContant2>
            </SettingField>
            <SettingField1>
              <SettingFieldSleepTimer>
                <SettingLabel>Sleep Timer</SettingLabel>

                <SettingContant2 style={{ marginRight: "75px" }}>
                  <div>
                    <SettingText>Inactive Times</SettingText>
                  </div>
                  <div className="setting-text-field">
                    <TextField
                      style={{ width: "45px", paddingLeft: "10px" }}
                      placeholder="min"
                      value={inActiveTimes}
                    />{" "}
                    <TextFieldPlace style={{ width: "70px" }}>
                      Mins
                    </TextFieldPlace>
                  </div>
                </SettingContant2>
                <SettingContant2 style={{ marginRight: "75px" }}>
                  <div>
                    <SettingText>Default Text</SettingText>
                  </div>
                  <div>
                    <TextField
                      style={{
                        borderRadius: "15px 15px 15px 15px",
                        paddingLeft: "10px",
                      }}
                      placeholder="Are You Available ?"
                      value={defaultText}
                    />
                  </div>
                </SettingContant2>
                <SettingContant2 style={{ marginRight: "75px" }}>
                  <div>
                    <SettingText>Disconnection Timer</SettingText>
                  </div>
                  <div className="setting-text-field">
                    <TextField
                      style={{ width: "45px", paddingLeft: "10px" }}
                      placeholder=" Mins"
                      value={disconnectTimes}
                    />
                    <TextFieldPlace style={{ width: "70px" }}>
                      Mins
                    </TextFieldPlace>
                  </div>
                </SettingContant2>
                <SettingLabel>Purge</SettingLabel>
                <SettingContant2>
                  <div>
                    <SettingText>Reactive Users</SettingText>
                  </div>
                  <ReactiveUser>
                    <div className="reactive-field-contant">
                      <TextField
                        style={{ width: "45px", paddingLeft: "10px" }}
                        placeholder=" Mins"
                        value={reativeUser}
                      />
                      <TextFieldPlace style={{ width: "70px" }}>
                        Mins
                      </TextFieldPlace>
                      <IoMdArrowDroprightCircle className="arrow-setting" />
                    </div>
                  </ReactiveUser>
                </SettingContant2>
              </SettingFieldSleepTimer>
              {/* <Button style="setting-save">Save</Button>
               */}
            </SettingField1>
          </div>
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">Save</span>
          </button>
        </div>
      </SettingContainer>
    </SettingMainContainer>
  );
};

export default AutoSetting;
