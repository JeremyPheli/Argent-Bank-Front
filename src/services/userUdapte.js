import axios from "axios";
import { URL_PROFILE } from "../config";

export async function userUpDate(userName) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(URL_PROFILE, userName);
      resolve(res.data);
    } catch (error) {
      console.log("error userUpDate");
      reject(error);
    }
  });
}
