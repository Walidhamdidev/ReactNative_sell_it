import React, { createContext, useState } from "react";

type User = { username: string; email: string; password: string };

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const initialAuthContext: AuthContextType = {
  user: null,
  setUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);
