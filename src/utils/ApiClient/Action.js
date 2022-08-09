import {
  CREATEBOT,
  CREATEMESSAGEREPLY,
  CREATEMESSAGESET,
  DELETEBOT,
  DELETEMESSAGEREPLY,
  DELETEMESSAGESET,
  GETBOT,
  GETMESSAGEREPLY,
  GETMESSAGESET,
  GETSETTING,
  UPDATEBOT,
  UPDATEMESSAGEREPLY,
  UPDATEMESSAGESET,
  UPDATESETTING,
} from "./apiEndPoints";

import { loaderStore } from "../../Store/Loader/LoaderStore";
import { apiPost, apiPut, apiGet, apiDelete } from "./instance";
export async function getAllBot() {
  try {
    const apiData = await apiGet(GETBOT);
    console.log("getallBot", apiData);
    loaderStore.setBotdata(apiData);
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}

export async function getSettings() {
  try {
    const apiData = await apiGet(GETSETTING);
    console.log("getSettinggggggggggg", apiData);
    loaderStore.setSettingdata(apiData);
    return apiData;
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function editSetting(id, body) {
  try {
    const apiData = await apiPut(`${UPDATESETTING}${id}`, body);
    if (apiData.status === true) {
      getSettings();
    }
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}

export async function getMessageSet(id) {
  try {
    console.log("getMessageSet", id);
    const apiData = await apiGet(`${GETMESSAGESET}${id}`);
    loaderStore.setMessagedata(apiData);
    console.log("getallMessageSet", apiData);
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}

export async function deleteBot(id) {
  try {
    const apiData = await apiDelete(`${DELETEBOT}${id}`);
    if (apiData.status === true) {
      getAllBot();
    }
    console.log("deletebot", apiData);
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function editBot(body, id) {
  try {
    const apiData = await apiPut(`${UPDATEBOT}${id}`, body);
    if (apiData.status === true) {
      getAllBot();
    }
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}

export async function editMessageSet(bodyy, editID, id) {
  try {
    const apiData = await apiPut(`${UPDATEMESSAGESET}${editID}`, bodyy);
    if (apiData.status === true) {
      getMessageSet(id);
    }
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function editMessageReplySet(body, id, getid) {
  try {
    const apiData = await apiPut(`${UPDATEMESSAGEREPLY}${id}`, body);
    if (apiData.status === true) {
      getMessageReplySet(getid);
    }
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function deleteMessage(_id, id) {
  try {
    const apiData = await apiDelete(`${DELETEMESSAGESET}${_id}`);
    if (apiData.status === true) {
      getMessageSet(id);
    }

    console.log("deletebot", apiData);
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function deleteMessageReply(_id, id) {
  try {
    const apiData = await apiDelete(`${DELETEMESSAGEREPLY}${_id}`);
    if (apiData.status === true) {
      getMessageReplySet(id);
    }
    console.log("deleteMessageReply", apiData);
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}

export async function addNewBot(body) {
  try {
    const apiData = await apiPost(CREATEBOT, body);
    console.log("postNewBot", apiData);

    if (apiData.user.role) {
      getAllBot();
    }
    return Promise.resolve(apiData);
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function addNewMessageSet(body, id) {
  try {
    const apiData = await apiPost(CREATEMESSAGESET, body);
    console.log("apidata msg setrrrrrrrrrrrrrrrrrrrrrrrrrrrr", apiData);
    if (apiData.user.role) {
      console.log("apidata msg ");
      getMessageSet(id);
    }
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function getMessageReplySet(id) {
  try {
    const apiData = await apiGet(`${GETMESSAGEREPLY}${id}`);
    loaderStore.setMessageReplydata(apiData);
    console.log("getallMessageReplySet", apiData);
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
export async function addNewMessageReplySet(body, id) {
  try {
    const apiData = await apiPost(CREATEMESSAGEREPLY, body);
    console.log("apidata msgREPLY set", apiData);
    if (apiData) {
      getMessageReplySet(id);
    }
  } catch (error) {
    console.log("err");

    return Promise.reject(error);
  }
}
