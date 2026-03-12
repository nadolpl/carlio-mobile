import api from "api/config/api";
import { AUTH } from "api/config/endpoints";
import { MobileLoginRequest } from "models/requests/MobileLoginRequest";
import { AuthResponse } from "models/response/AuthResponse";
import { LoginRequest } from "models/requests/LoginRequest";
import { RegisterRequest } from "models/requests/RegisterRequest";

export const requestGoogleLogin = (req: MobileLoginRequest) =>
  api.post<AuthResponse>(`${AUTH}/google/mobile`, req);

export const requestLogin = (req: LoginRequest) => api.post<AuthResponse>(`${AUTH}/login`, req);

export const requestRegister = (req: RegisterRequest) =>
  api.post<void>(`${AUTH}/register`, req);
