import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import { getRefreshToken } from "api/services/authStorage";

export const requestRefreshAccessToken = async () => {
  const refreshToken = await getRefreshToken();

  if (!refreshToken) throw new Error("Refresh token not found");

  const response = await axios.post<AuthResponse>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/refresh/mobile`,
    { refreshToken: refreshToken },
    {
      headers: { "Content-Type": "application/json" },
    },
  );

  return response.data;
};
