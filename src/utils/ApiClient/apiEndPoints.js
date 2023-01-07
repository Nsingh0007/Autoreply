



export const API_BASE_URL = "https://autoreplybackend.moreyeahs.in/";


export const getAuthApiUrl = (endpoint) => API_BASE_URL + endpoint;



export const GETMESSAGESET = getAuthApiUrl("api/message/getMessage/");
export const CREATEMESSAGESET = getAuthApiUrl("api/message/message");
export const UPDATEMESSAGESET = getAuthApiUrl("api/message/updateMessage?messageId=");
export const DELETEMESSAGESET = getAuthApiUrl("api/message/deleteMessage?_id=");

export const GETBOT = getAuthApiUrl("api/bot/getBot?");
export const CREATEBOT = getAuthApiUrl("api/bot/createBot");
export const UPDATEBOT = getAuthApiUrl("api/bot/updateBot?_id=");
export const DELETEBOT = getAuthApiUrl("api/bot/deleteBotById?_id=");

export const GETMESSAGEREPLY = getAuthApiUrl("api/reply/getByMessageId?messageId=");
export const CREATEMESSAGEREPLY = getAuthApiUrl("api/reply/reply");
export const UPDATEMESSAGEREPLY = getAuthApiUrl("api/reply/updateReply?replyId="
);
export const DELETEMESSAGEREPLY = getAuthApiUrl("api/reply/deleteById?_id=");



export const GETSETTING = getAuthApiUrl(
  "api/setting/getCreateSetting?botId="
);

export const UPDATESETTING = getAuthApiUrl(
  "api/setting/updateSettingTable?_id="

);
export const CREATEBOTSETTING = getAuthApiUrl(
  "api/setting/createSetting"

);

