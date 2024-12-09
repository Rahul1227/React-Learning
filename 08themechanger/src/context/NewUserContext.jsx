import { createContext, useContext, useState } from "react";

// Create a context for user state
export const UserContext = createContext(null);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export default function useUser() {
  return useContext(UserContext);
}
