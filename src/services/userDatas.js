import axios from "axios";
import { URL_PROFILE } from "../config";

export const userDatas = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL_PROFILE);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
