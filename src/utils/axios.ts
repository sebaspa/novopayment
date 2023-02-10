import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://services-ten.vercel.app/menu",
});

export default customFetch;
