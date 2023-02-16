import axios from "axios";
// import ApiClient from ".";
// import Endpoints from "./apiEndPoints";

import { loaderStore } from "../../Store/Loader/LoaderStore";

// import store from '../redux/store';
// import types from '../redux/types';

// const { dispatch, getState } = store;

// export async function getHeaders() {
//   // let userData = await AsyncStorage.getItem('userData');
//   let userDatas = authStore.userData.authToken.access_token;

//   if (userDatas) {
//     // userDatas = JSON.parse(userDatas);

//     return {
//       authorization: `Bearer ${userDatas}`,
//     };
//   }
//   return {};
// }

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {}
) {
  return new Promise(async (res, rej) => {
    // loaderStore.setLoader(true);
    // const getTokenHeader = await getHeaders();
    headers = {
      ...headers,
    };

    if (method === "get" || method === "delete") {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    axios[method](endPoint, data, { headers })
      .then((result) => {
        const { data } = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch((error) => {
        //console.logerror);
        //console.logerror && error.response, "the error response");
        if (error && error.response && error.response.status === 401) {
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || "Network Error",
            });
          }

          return rej(error.response.data);
        } else {
          return rej({ message: "Network Error", msg: "Network Error" });
        }

        return rej(error);
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "put", headers);
}
