import { useContext } from "react";
import { counterContext } from "../App";

const ComponentB = () => {
  const countContext = useContext(counterContext);
  return (
    <div>
      <p>Componant A</p>
      <button
        type="button"
        onClick={() => countContext.countDispatch("increment")}
      >
        increment
      </button>
      <button
        type="button"
        onClick={() => countContext.countDispatch("decrement")}
      >
        decrement
      </button>
    </div>
  );
};

export default ComponentB;
