import axios from "axios";
import { BASE_API_URL } from "@/src/constants";

export const httpClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: 6000,
  headers: {
    Authorization: "Client-ID Vx8wj5s5uOwU_gy8XtVzCKz0_klEgbe0FjY2cqMf9Aw",
  },
});
