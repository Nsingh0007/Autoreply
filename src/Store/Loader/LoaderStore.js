import { action, computed, makeObservable, observable } from "mobx";

class LoaderStore {
  initialState = {
    bot: [],
    messageSet: [],
    messageReplySet: [],
    setting: [],
  };
  constructor() {
    makeObservable(this, {
      initialState: observable,
      setBotdata: action,
      setMessagedata: action,
      setMessageReplydata: action,
      setSettingdata: action,
    });
  }
  setBotdata(data) {
    this.initialState.bot = data;
  }
  setMessagedata(data) {
    this.initialState.messageSet = data;
    //console.log"setMessagedata", data)
  }
  setMessageReplydata(data) {
    this.initialState.messageReplySet = data;
    //console.log" setMessageReplydata=============>", data)
  }
  setSettingdata(data) {
    this.initialState.setting = data;
  }
}
export const loaderStore = new LoaderStore();
