import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("accessToken");

      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      }

      axios.get("/profile", { withCredentials: true })
        .then(({ data }) => {
          setUser(data);
          setReady(true);
        })
        .catch(() => {
          setReady(true);
        });
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
