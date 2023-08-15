import { useState } from "react";
import MyComponent from "./components/MyComponent";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>{show && <MyComponent />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "hide post" : "show post"}
        </button>
      </p>
    </div>
  );
}
