import { useContext, useState } from "react";
import { Userscontext } from "../context/UsersContext";

// eslint-disable-next-line react/prop-types
const NewUser = () => {
  const { setUsers } = useContext(Userscontext);
  const [username, setUsername] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUsername("");
  };
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
          required
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default NewUser;
