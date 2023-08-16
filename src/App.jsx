import { useState, useCallback, useMemo } from "react";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";

export default function App() {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  const incrementByOne = useCallback(() => {
    //function memorize kore rakhe
    setcount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setcount2((preCount) => preCount + 5);
  }, []);

  const isEventOrOdd = useMemo(() => {
    // function arte return value memorize kore
    let i = 0;
    while (i < 1000) {
      i = i + 1;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEventOrOdd ? "even" : "odd"}</span>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr />
      <ShowCount count={count2} title="counter 2" />
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}
