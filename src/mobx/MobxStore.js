import { makeObservable, observable, action, makeAutoObservable } from "mobx";

class botInfo {
  initialState = {
    bot: [],
    message: [],
    messageReply: [],
    autoSetting: [],
    refresh: false,
  };

  constructor(initialState) {
    makeAutoObservable(this, {
      setBotName: action,
      setMessageSet: action,
      setReplyMessageSet: action,

      setRefresh: action,
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
  setRefresh(data) {
    this.initialState.refresh = data;
  }
}
export const Bot = new botInfo();
