import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, option);
}

export const getCookie = (name, option) => {
  return cookies.get(name, option)
}

export const removeCookie = (name, option) => {
  return cookies.remove(name, option)
}