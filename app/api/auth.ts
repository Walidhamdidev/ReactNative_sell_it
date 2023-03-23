import apiClient from "./client";

const login = (email: string, password: string) =>
  apiClient.post("/auth/local", { identifier: email, password });

export default {
  login,
};
