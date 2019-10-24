import axios from "axios";

export default function axiosAuth(options) {
  let token = "";
  try {
    token = window.localStorage.getItem("token");
  } catch (e) {
    console.log("error checking token");
  }
  const headers = {
    "Content-Type": "application/json",
    "Authorization": token
  };
  const optionsWithAuthHeader = { ...options, headers };

  console.log(optionsWithAuthHeader)

  return axios(optionsWithAuthHeader);
}
