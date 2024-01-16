import Input from "../../components/Input";
import "./Category.css";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <Input
          handleChange={handleChange}
          value={"sneakers"}
          title={"Sneakers"}
          name={"text"}
        />
        <Input
          handleChange={handleChange}
          value={"flats"}
          title={"Flats"}
          name={"text"}
        />
        <Input
          handleChange={handleChange}
          value={"sandals"}
          title={"Sandals"}
          name={"text"}
        />
        <Input
          handleChange={handleChange}
          value={"heels"}
          title={"heels"}
          name={"text"}
        />
      </div>
    </div>
  );
};

export default Category;
