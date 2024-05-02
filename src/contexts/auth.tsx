import { api } from "@/services/api";
import { createContext, useContext } from "react";

interface TypeLogin {
  children: React.ReactNode;
}

interface SessionUser {
  isUserLogin: boolean;
  login: (login: string, senha: string) => void;
  logout: () => void;
  profile: object;
}

const SessionUserContext = createContext<SessionUser>({
  isUserLogin: false,
  login: () => null,
  logout: () => null,
  profile: {},
});

export const useSessionUserContext = () => {
  return useContext(SessionUserContext);
};

export const SessionUserProvider = ({ children }: TypeLogin) => {
  const login = (login: string, senha: string) => {
    api
      .post("/login", {
        login,
        senha
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const value = {
    login,
  };

  return (
    <SessionUserContext.Provider value={value}>
      {children}
    </SessionUserContext.Provider>
  );
};
