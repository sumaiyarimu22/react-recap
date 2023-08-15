import User from "./User";

import { useUsersContext } from "../hooks/useUsersContext";

// eslint-disable-next-line react/prop-types
const Users = () => {
  const { users } = useUsersContext();
  return (
    <section className="users">
      {/* eslint-disable-next-line react/prop-types */}
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
