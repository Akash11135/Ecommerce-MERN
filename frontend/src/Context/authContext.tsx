// UserContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  userId: string;
  fullName: string;
  isAdmin: boolean;
  // Add other fields as necessary
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userlogged = localStorage.getItem("user");
    if (userlogged !== null) {
      try {
        const parsedUser = JSON.parse(userlogged);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
