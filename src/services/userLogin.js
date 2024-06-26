import axios from "axios";
import { URL_LOGIN } from "../config";

export const userLogin = async (credientials) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL_LOGIN, credientials);
      console.log(res);
      const token = res.data.body.token;
      if (token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      else delete axios.defaults.headers.common["Authorization"];
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
