import { AxiosInstance } from "axios";
import * as authStorage from "api/services/authStorage";
import { requestRefreshAccessToken } from "api/services/tokenService";
import { ApiError } from "models/ApiError";
import Toast from "react-native-toast-message";

export const setupInterceptors = (instance: AxiosInstance, onLogout: () => void) => {
  instance.interceptors.request.use(async (config) => {
    const token = await authStorage.getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
        const isAuthRequest =
          originalRequest.url?.includes("/login") || originalRequest.url?.includes("/refresh");

        if (!isAuthRequest) {
          originalRequest._retry = true;
          try {
            const { accessToken, refreshToken } = await requestRefreshAccessToken();
            await authStorage.setAccessToken(accessToken);
            if (refreshToken) await authStorage.setRefreshToken(refreshToken);

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return instance(originalRequest);
          } catch (refreshError) {
            await authStorage.clearAuthTokens();
            onLogout();
            return Promise.reject(error.response?.data as ApiError);
          }
        }
      }

      const apiError: ApiError = error.response?.data || {
        message: "Unexpected error occurred",
        status: error.response?.status || 500,
      };

      const shouldNotShowToast = error.response?.status === 401;

      if (!shouldNotShowToast) {
        Toast.show({
          type: "error",
          text1: apiError.message,
          text2: apiError.error,
          visibilityTime: 5000,
        });
      }

      return Promise.reject(apiError);
    },
  );
};
