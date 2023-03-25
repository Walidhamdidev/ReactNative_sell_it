import apiClient from "./client";

const login = (email: string, password: string) =>
  apiClient.post("/auth/local", { identifier: email, password });

const register = (username: string, email: string, password: string) =>
  apiClient.post("/auth/local/register", { username, email, password });

export default {
  login,
  register,
};
