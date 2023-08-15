import { useContext } from "react";
import { Userscontext } from "../context/UsersContext";

export const useUsersContext = () => {
  return useContext(Userscontext);
};
