import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://onboarding.openix.com.ar:4000",
  withCredentials: true,
});

export default clientAxios;
