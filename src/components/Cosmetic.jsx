import { addTodb } from "../utilities/fakedb";

// eslint-disable-next-line react/prop-types
const Cosmetic = ({ cosmetic }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, id } = cosmetic;

  const addToCart = (id) => {
    addTodb(id);
  };
  return (
    <div className="product">
      <h3>Buy this:{name}</h3>

      <p>Only for:{price}</p>
      <p>
        <small>it has id:{id}</small>
      </p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  );
};

export default Cosmetic;
