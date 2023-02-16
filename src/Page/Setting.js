import React, { useEffect, useState } from "react";
import axios from "axios";
import { editSetting } from "../utils/ApiClient/Action";
import Switch from "@mui/material/Switch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoMdArrowDroprightCircle } from "react-icons/io";
import "./Style.css";
import { observer } from "mobx-react-lite";
import { getSettings } from "../utils/ApiClient/Action";
import { loaderStore } from "../Store/Loader/LoaderStore";
import { useParams } from "react-router-dom";
import { toJS } from "mobx";
const label = { inputProps: { "aria-label": "Switch demo" } };
const AutoSetting = () => {
  let { id } = useParams();
  //console.log"firrrrrrrrrrst----->w", id);

  const [delayResponse, setDelayResponse] = useState("");
  const [inActiveTimes, setInactiveTimer] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [disconnectTimes, setDisconnectTimer] = useState("");
  const [reativeUser, setReactiveUser] = useState("");

  const [MessageSetting, setMessageSetting] = useState("");
  useEffect(() => {
    getSettings(id);
  }, []);
  useEffect(() => {
    setDelayResponse(loaderStore.initialState.setting.message?.delayResponse);
    setInactiveTimer(loaderStore.initialState.setting.message?.inActiveTimes);
    setDefaultText(loaderStore.initialState.setting.message?.defaultText);
    setDisconnectTimer(
      loaderStore.initialState.setting.message?.disconnectTimes
    );
    setReactiveUser(loaderStore.initialState.setting.message?.reativeUser);
  }, [loaderStore.initialState.setting]);

  const handelsave = async () => {
    var body = {
      defaultText: defaultText,

      delayResponse: delayResponse,
      inActiveTimes: inActiveTimes,
      disconnectTimes: disconnectTimes,
    };
    var dta = {
      defaultText: "New",
      delayResponse: 5,
      inActiveTimes: 4,
      disconnectTimes: 3,
    };
    //console.log"messahesettingbody", toJS(loaderStore.initialState.setting));
    var apidata = await editSetting(
      loaderStore.initialState.setting.message?._id,
      body,
      id
    );

    toast("Setting Save Successfully!");
  };

  return (
    <div className="SettingMainContainer">
      <div className="SettingContainer">
        <div className="setting-contentt">
          <div className="SettingLabel">Setting</div>
          <div className="setting-para">
            <div className="SettingField">
              <div className="SettingLabel">Delay Response</div>
              <div className="SettingContant2">
                <div>
                  <div className="SettingText">Delay Response time</div>
                </div>
                <div className="setting-text-field">
                  <input
                    style={{ width: "45px" }}
                    placeholder="sec"
                    value={delayResponse}
                    onChange={(e) => {
                      setDelayResponse(e.target.value);
                    }}
                  />
                  <div className="TextFieldPlace">Sec</div>
                </div>
              </div>
              <div className="SettingLabel">Purge</div>
              <div className="SettingContant2">
                <div>
                  <div className="SettingText">Reactive Users</div>
                </div>
                <div className="ReactiveUser">
                  <div className="reactive-field-contant">
                    <IoMdArrowDroprightCircle className="arrow-setting" />
                  </div>
                </div>
              </div>
            </div>
            <div className="SettingField1">
              <div className="SettingFieldSleepTimer">
                <div className="SettingLabel">Sleep Timer</div>

                <div className="SettingContant2">
                  <div>
                    <div className="SettingText">Inactive Times</div>
                  </div>
                  <div className="setting-text-field">
                    <input
                      style={{ width: "45px", paddingLeft: "10px" }}
                      placeholder="min"
                      value={inActiveTimes}
                      onChange={(e) => {
                        setInactiveTimer(e.target.value);
                      }}
                    />{" "}
                    <div className="TextFieldPlace">Mins</div>
                  </div>
                </div>
                <div className="SettingContant2">
                  <div>
                    <div className="SettingText">Default Text</div>
                  </div>
                  <div>
                    <input
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
                </div>
                <div className="SettingContant2">
                  <div>
                    <div className="SettingText">Disconnection Timer</div>
                  </div>
                  <div className="setting-text-field">
                    <input
                      style={{ width: "45px", paddingLeft: "10px" }}
                      placeholder=" Mins"
                      value={disconnectTimes}
                      onChange={(e) => {
                        setDisconnectTimer(e.target.value);
                      }}
                    />
                    <div className="TextFieldPlace">Mins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="button-82-pushable"
            role="button"
            onClick={() => {
              handelsave();
            }}
          >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">Save</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default observer(AutoSetting);
