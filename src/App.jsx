import Users from "./components/Users";
import NewUser from "./components/NewUser";
import Userprovider from "./context/UsersContext";

const App = () => {
  return (
    <Userprovider>
      <NewUser />
      <Users />
    </Userprovider>
  );
};

export default App;
