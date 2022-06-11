import React, { useState } from "react";
import { createContext } from "react";
import md5 from "crypto-js/md5";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const { name, email, avatar } = user;

  const [token, setToken] = useState("");

  const setName = ({ target }) => setUser({ ...user, name: target.value });
  const setEmail = ({ target }) => {
    setUser({ ...user, email: target.value });
  };
  const setAvatar = (email) => {
    const url = "https://www.gravatar.com/avatar/";
    setUser({ ...user, avatar: `${url}${md5(email).toString()}` });
  };

  const validateEmail = (email) => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    }
    return false;
  };

  const validateNameAndEmail = () =>
    name !== "" && email !== "" && validateEmail(email);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        avatar,
        setAvatar,
        token,
        setToken,
        validateNameAndEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
