import { useAuth } from "contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "models/requests/LoginRequest";
import { AuthResponse } from "models/response/AuthResponse";
import { requestLogin } from "api/requests/auth";

export const useLogin = () => {
  const { authorize } = useAuth();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => requestLogin(credentials),
    onSuccess: (res: AuthResponse) => authorize(res),
  });
};
