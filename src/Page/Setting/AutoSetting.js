import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactiveUser, TextField, TextFieldPlace } from "../Style/SettingStyle";
import Button from "../../Component/CustomButton";
import Switch from "@mui/material/Switch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { observer } from "mobx-react-lite";
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
    // const timer = setTimeout(() => {

    //   console.log(" 1 second");
    // }, 1000);
    // return () => clearTimeout(timer);
  }, []);

  const isGetMessage = async () => {
    try {
      let mobile = "1234567890";
      await axios
        .get(
          `https://autoreplybackend.moreyeahs.in/api/setting/getCreateSetting?mobile=${mobile}`
        )
        .then((res) => {
          console.log("is GET MESSAGE DATA", res.data);
          setMessageSetting(res.data.message);
          messageSetting(res.data.message);
          // Bot.setMessageSetting(body.res.data);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log("API CALLING ERROR", e);
    }
  };

  const handelsave = async (id) => {
    console.log("ttttttttttttttttttttttttttttttttttttttt", MessageSetting?._id);
    let mobile = "1234567890";
    await axios
      .put(
        `https://autoreplybackend.moreyeahs.in/api/setting/updateSettingTable?_id=${id}`,
        {
          isCalledReply: isCallEnableReply,
          isSmsReply: isSMSEnableReply,
          isMmsReply: isMMSEnableReply,
          defaultText: defaultText,
          delayResponse: delayResponse,
          inActiveTimes: inActiveTimes,
          disconnectTimes: disconnectTimes,
          reativeUser: reativeUser,
          mobile: mobile,
        }
      )
      .then(async (res) => {
        // messageSetting(res.data.data);
        // await isGetMessage();
        toast("Setting Save Successfully!");
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  const messageSetting = async (item) => {
    console.log(">>>>>>>>>>>>>>>>ITEM>>>>>>", item);
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
                    style={{ color: "#212F3D" }}
                    color="default"
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
                    style={{ color: "#212F3D" }}
                    color="default"
                    value={isSMSEnableReply}
                  />
                </div>
              </SettingContant1>
              {/* <SettingContant1>
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
              </SettingContant1> */}

              <SettingLabel>Delay Response</SettingLabel>
              <SettingContant2>
                <div>
                  <SettingText>Delay Response time</SettingText>
                </div>
                <div className="setting-text-field">
                  <TextField
                    type="text"
                    style={{ width: "45px" }}
                    placeholder="sec"
                    value={delayResponse}
                    onChange={(e) => {
                      setDelayResponse(e.target.value);
                    }}
                  />
                  <TextFieldPlace style={{ width: "70px" }}>Sec</TextFieldPlace>
                </div>
              </SettingContant2>
            </SettingField>
            <SettingField1>
              <SettingFieldSleepTimer>
                <SettingLabel>Sleep Timer</SettingLabel>

                <SettingContant2>
                  <div>
                    <SettingText>Inactive Times</SettingText>
                  </div>
                  <div className="setting-text-field">
                    <TextField
                      style={{ width: "45px", paddingLeft: "10px" }}
                      placeholder="min"
                      value={inActiveTimes}
                      onChange={(e) => {
                        setInactiveTimer(e.target.value);
                      }}
                    />{" "}
                    <TextFieldPlace style={{ width: "70px" }}>
                      Mins
                    </TextFieldPlace>
                  </div>
                </SettingContant2>
                <SettingContant2>
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
                      onChange={(e) => {
                        setDefaultText(e.target.value);
                      }}
                    />
                  </div>
                </SettingContant2>
                <SettingContant2>
                  <div>
                    <SettingText>Disconnection Timer</SettingText>
                  </div>
                  <div className="setting-text-field">
                    <TextField
                      style={{ width: "45px", paddingLeft: "10px" }}
                      placeholder=" Mins"
                      value={disconnectTimes}
                      onChange={(e) => {
                        setDisconnectTimer(e.target.value);
                      }}
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
                      {/* <TextField
                        style={{ width: "45px", paddingLeft: "10px" }}
                        placeholder=" Mins"
                        value={reativeUser}
                        onChange={(e) => {
                          setReactiveUser(e.target.value);
                        }}
                      />
                      <TextFieldPlace style={{ width: "70px" }}>
                        Mins
                      </TextFieldPlace> */}
                      <IoMdArrowDroprightCircle className="arrow-setting" />
                    </div>
                  </ReactiveUser>
                </SettingContant2>
              </SettingFieldSleepTimer>
              {/* <Button style="setting-save">Save</Button>
               */}
            </SettingField1>
          </div>
          <button
            class="button-82-pushable"
            role="button"
            onClick={() => {
              handelsave(MessageSetting?._id);
              // alert(MessageSetting)
            }}
          >
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">Save</span>
          </button>
          {/* Ghanendra */}
        </div>
      </SettingContainer>
      <ToastContainer />
    </SettingMainContainer>
  );
};

export default observer(AutoSetting);
