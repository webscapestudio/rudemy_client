import { destroyCookie } from "nookies";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    // Authorization: "Bearer " + token,
  },
});

export const AuthApi = {
  async login(vals) {
    const { data } = await instance.post("auth/login", vals);
    return data;
  },

  async getMe(token) {
    const { data } = await instance.get("auth/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  },

  async update(token, vals) {
    const { data } = await instance.patch("users/me", vals, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  },

  async register(vals) {
    const { data } = await instance.post("auth/registration", vals);
    return data;
  },

  async logout() {
    destroyCookie(null, "rdtoken");
  },
};
