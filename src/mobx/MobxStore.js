import { makeObservable, observable, action, makeAutoObservable } from "mobx";

class botInfo {
  initialState = {
    bot: [],
    message: [],
    messageReply: [],
    autoSetting: [],
  };

  constructor(initialState) {
    makeAutoObservable(this, {
      setBotName: action,
      setMessageSet: action,
      setReplyMessageSet: action,
      setMessageSetting: action,
    });
  }
  setBotName(data) {
    this.initialState.bot = data;
  }
  setMessageSet(data) {
    this.initialState.message = data;
  }
  setReplyMessageSet(data) {
    this.initialState.messageReply = data;
  }
  setMessageSetting(data) {
    this.initialState.autoSetting = data;
  }
}
export const Bot = new botInfo();
