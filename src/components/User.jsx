import { useUsersContext } from "../hooks/useUsersContext";

// eslint-disable-next-line react/prop-types
const User = ({ user }) => {
  // eslint-disable-next-line react/prop-types

  const { users, setUsers } = useUsersContext();
  // eslint-disable-next-line react/prop-types
  const { id, username } = user;

  const handleDelete = (id) => {
    // eslint-disable-next-line react/prop-types
    const filterUsers = users.filter((user) => user.id !== id);
    setUsers(filterUsers);
  };

  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
