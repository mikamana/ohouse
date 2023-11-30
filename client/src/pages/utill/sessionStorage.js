import { getCookie, removeCookie } from "./cookie";

export const getUser = () => {
  let userInfo = sessionStorage.getItem("userInfo") && getCookie("ohouse-jwt")
    ? JSON.parse(sessionStorage.getItem("userInfo")) : null;
  return userInfo
}

export const removeUser = () => {
  removeCookie("ohouse-jwt");
  sessionStorage.clear();
}