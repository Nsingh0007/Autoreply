// class Server {
//   // userService = "http://192.168.1.16:3000";
//   userService = "https://autoreplybackend.moreyeahs.in";
//   baseURL = this.userService;

//   // ngrok = "https://350f-103-15-67-130.ngrok.io";
//   // baseURL = this.ngrok;
// }

// class Endpoints extends Server {
//   SignUp = "api/auth/signup";
//   SignIn = "api/auth/signin";
//   getBoat = "api/bot/getCreateBot";
//   createBot = "api/bot/createbot";
//   updateBot = (id) => `api/bot/updatebot?botId=${id}`;
//   // deleteBot = "api/bot/deletebot";
//   deleteBot = (id) => `api/bot/deletebot?_id=${id}`;
//   getSettings = (mobile) => `api/setting/getCreateSetting?mobile=${mobile}`;
//   saveSettings = (id) => `api/setting/updateSettingTable?_id=${id}`;
//   getMsgSetByBotId = (id) => `api/message/getByBotId?botId=${id}`;
//   getMsgSetDeleteById = (id) => `api/message/deleteById?_id=${id}`;
//   createMessageSet = "api/message/createMessage";
//   changePassword = "api/auth/changePassword";
//   getBt = "api/bt/getBt";
//   createBt = "api/bt/createBt";
//   getBotById = (id) => `api/bot/getBot?btId=${id}`;
//   getBotByBtId = (id) => `api/bot/getBotByBtId?btId=${id}`;
//   getCreateMsg = "api/message/getCreateMessage";
// }

// export default Object.freeze(new Endpoints());

export const API_BASE_URL = "https://autoreplybackend.moreyeahs.in/";
// export const API_BASE_URL = 'http://204.236.172.208:8081';

export const getAuthApiUrl = (endpoint) => API_BASE_URL + endpoint;

/////////////// Auth

export const GETMESSAGESET = getAuthApiUrl("api/bot/getBotByBtId?btId=");
export const CREATEMESSAGESET = getAuthApiUrl("api/bot/createbot");
export const UPDATEMESSAGESET = getAuthApiUrl("api/bot/updatebot?botId=");
export const DELETEMESSAGESET = getAuthApiUrl("api/bot/deletebot?_id=");

export const GETBOT = getAuthApiUrl("api/bt/getBt");
export const CREATEBOT = getAuthApiUrl("api/bt/createBt");
export const UPDATEBOT = getAuthApiUrl("api/bt/updateBtTable?_id=");
export const DELETEBOT = getAuthApiUrl("api/bt/deleteBtById?_id=");

export const GETMESSAGEREPLY = getAuthApiUrl("api/message/getByBotId?botId=");
export const CREATEMESSAGEREPLY = getAuthApiUrl("api/message/createMessage");
export const UPDATEMESSAGEREPLY = getAuthApiUrl(
  "api/message/updateMessageSet?_id="
);
export const DELETEMESSAGEREPLY = getAuthApiUrl("api/message/deleteById?_id=");

// export const SIGNUP = getAuthApiUrl("/auth/signup");
// export const EDIT_PROFILE = getAuthApiUrl("/auth/updateUser");
// export const SAVE_WISHLIST = getAuthApiUrl("/auth/SaveWishlist");

export const GETSETTING = getAuthApiUrl(
  "api/setting/getCreateSetting?mobile=1234567890"
);

export const UPDATESETTING = getAuthApiUrl(
  "api/setting/updateSettingTable?_id="
);
