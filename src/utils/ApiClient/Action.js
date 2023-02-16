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
  CREATEBOTSETTING,
} from "./apiEndPoints";

import { loaderStore } from "../../Store/Loader/LoaderStore";
import { apiPost, apiPut, apiGet, apiDelete } from "./instance";
export async function getAllBot() {
  try {
    var date = new Date()
    const apiData = await apiGet(GETBOT + date);
    //console.log"getallBot", apiData);
    loaderStore.setBotdata(apiData);
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}



export async function getMessageSet(id) {
  var date = new Date()
  try {
    //console.log"getMessageeeeeeeeeeeeeeeSet", id);
    const apiData = await apiGet(`${GETMESSAGESET}${id}?${date}`);
    //console.log"getallMessageSettttttttttt", apiData);
    loaderStore.setMessagedata(apiData);
    return apiData
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}

export async function deleteBot(id) {
  try {
    const apiData = await apiDelete(`${DELETEBOT}${id}`);
    if (apiData.status === true) {
      await getAllBot();
    }
    //console.log"deletebot", apiData);
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}
export async function editBot(body, id) {
  try {
    const apiData = await apiPut(`${UPDATEBOT}${id}`, body);
    //console.log"apiData->>>>>>>>", apiData)
    if (apiData.status === true) {
      await getAllBot();
    }
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}

export async function editMessageSet(bodyy, editID, id) {
  try {
    const apiData = await apiPut(`${UPDATEMESSAGESET}${editID}`, bodyy);
    if (apiData.status === true) {
      await getMessageSet(id);
    }
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}

export async function deleteMessage(_id, id) {
  try {
    const apiData = await apiDelete(`${DELETEMESSAGESET}${_id}`);
    if (apiData.status === true) {
      await getMessageSet(id);
    }

    //console.log"deletebot", apiData);
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}
export async function deleteMessageReply(_id, id) {
  try {
    const apiData = await apiDelete(`${DELETEMESSAGEREPLY}${_id}`);
    if (apiData.status === true) {
      // await getMessageReplySet(id);
      // getMessageReplySet(id)
    }
    //console.log"deleteMessageReply", apiData);
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}

export async function addNewMessageSet(body, id) {
  try {
    const apiData = await apiPost(CREATEMESSAGESET, body);
    //console.log"apidata msg setrrrrrrrrrrrrrrrrrrrrrrrrrrrr", apiData, id);
    if (apiData.messageSet.role) {
      //console.log"apidata msg ");
      await getMessageSet(id);
    }
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}
export async function getMessageReplySet(id, msgId) {
  //console.log" getMessageReplySet(id)", id)

  var date = new Date()
  try {
    // const apiData = await apiGet(`${GETMESSAGEREPLY}?${_id}?${date}`);
    // //console.log"getallReplyMessageSettttttttttt", apiData);
    // loaderStore.setMessageReplydata(apiData);
    // //console.log"getallMessageReplySet", apiData);
    var data = await getMessageSet(id);
    var finalData = data.message.find(ele => ele._id === msgId)
    loaderStore.setMessageReplydata(finalData)

  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}
export async function addNewMessageReplySet(body, id) {
  try {
    const apiData = await apiPost(CREATEMESSAGEREPLY, body);
    //console.log"apidata msgREPLY set", id);
    if (apiData.data.role) {
      // getMessageReplySet(id)
      var data = await getMessageSet(id);
      var finalData = data.message.find(ele => ele._id === body.messageId)
      loaderStore.setMessageReplydata(finalData)
      // //console.log"getMessageSet->>>>>>>>>>>>>>>>>>>>>>>>", data)
    }
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}
export async function editMessageReplySet(Finalbody, editID, id) {
  try {
    const apiData = await apiPut(`${UPDATEMESSAGEREPLY}${editID}`, Finalbody);
    //console.log"editReply=============>")
    if (apiData.status === true) {
      // getMessageReplySet(id)

    }
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}
export async function CreateBotSetting(id) {
  try {
    var body = {
      "botId": id,
      "isCalledReply": true,
      "isSmsReply": true,
      "isMmsReply": true,
      "defaultText": "Are You avalable ?",
      "delayResponse": 1,
      "inActiveTimes": 1,
      "disconnectTimes": 1
    }
    const apiData = await apiPost(CREATEBOTSETTING, body);
    //console.log"cteareBotSetting", apiData);

    return Promise.resolve(apiData);
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}

export async function createNewBot(body) {
  try {
    const apiData = await apiPost(CREATEBOT, body);
    //console.log"postNewBot", apiData);

    if (apiData.user.role) {
      await getAllBot();
      await CreateBotSetting(apiData.user._id)
      //console.log"firstttt==========================>", CreateBotSetting)



    }
    return Promise.resolve(apiData);
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}


export async function getSettings(id) {
  var date = Date.now()
  try {
    const apiData = await apiGet(GETSETTING + id);
    //console.log"getSettinggggggggggg", apiData);
    loaderStore.setSettingdata(apiData);
    //console.log"getSettinapidata", apiData);
    return apiData;
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}
export async function editSetting(id, body, btid) {

  try {
    const apiData = await apiPut(`${UPDATESETTING}${id}`, body);
    if (apiData.status === true) {
      await getSettings(btid);

      //console.log"getSettingggggggggggggg", getSettings);
    }
  } catch (error) {
    //console.log"err");

    return Promise.reject(error);
  }
}