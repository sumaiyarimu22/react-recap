import { createContext, useState } from "react";

export const Userscontext = createContext({});

// eslint-disable-next-line react/prop-types
const Userprovider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, username: "ayra" },
    { id: 2, username: "nafaysa" },
  ]);
  return (
    <Userscontext.Provider value={{ users, setUsers }}>
      {children}
    </Userscontext.Provider>
  );
};

export default Userprovider;
