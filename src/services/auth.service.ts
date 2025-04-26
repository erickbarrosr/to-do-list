import { api } from "./api";
import { RegisterBody, RegisterResponse } from "../types";
// import { LoginResponse } from "../types/LoginResponse";

const baseUrl = "/users";

export const register = async (data: RegisterBody) => {
  const response = await api.post<RegisterResponse>(
    `${baseUrl}/register`,
    data
  );

  return response.data;
};

// export const login = async (data: LoginBody) => {
//   const response = await api.post<LoginResponse>(`${baseUrl}/login`, data);

//   return response.data;
// };

// export const checkAuth = async () => {
//   try {
//     const response = await api.get(`${baseUrl}/user`);
//     return response.data;
//   } catch {
//     return null;
//   }
// };

// export const logout = () => {
//   localStorage.removeItem("token");
// };
