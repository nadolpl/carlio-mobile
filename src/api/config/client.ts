import axios from "axios";
import { setupInterceptors } from "api/config/interceptors";

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export const initApiClient = (onLogout: () => void) =>
  setupInterceptors(client, onLogout);

export default client;
