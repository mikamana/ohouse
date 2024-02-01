import { getCookie, removeCookie } from "./cookie";

export const getUser = () => {
  let userInfo = sessionStorage.getItem("userInfo") && getCookie("ohouse-jwt")
    ? JSON.parse(sessionStorage.getItem("userInfo")) : null;
  return userInfo
}

export const getManager = () => {
  let userInfo = sessionStorage.getItem("userInfo") && getCookie("ohouse-manager")
    ? JSON.parse(sessionStorage.getItem("userInfo")) : null;
  return userInfo
}

export const removeUser = () => {
  removeCookie("ohouse-jwt");
  removeCookie("ohouse-manager");
  sessionStorage.clear();
}