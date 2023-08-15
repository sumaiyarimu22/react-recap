import { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const tick = () => {
    console.log(`clock ticking!`);
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>Time:{date.toLocaleTimeString()}</p>
      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
};

export default MyComponent;
