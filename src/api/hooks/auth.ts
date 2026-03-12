import { useAuth } from "contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "models/requests/LoginRequest";
import { AuthResponse } from "models/response/AuthResponse";
import { requestLogin, requestRegister } from "api/requests/auth";
import { RegisterRequest } from "models/requests/RegisterRequest";

export const useLogin = () => {
  const { authorize } = useAuth();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => requestLogin(credentials),
    onSuccess: (res: AuthResponse) => authorize(res),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (credentials: RegisterRequest) => requestRegister(credentials),
  });
};