import { useState } from "react";

const AddRemoveCSS = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`background ${isActive === false && "background--active"}`}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={`picture ${isActive && "picture--active"}`}
        src='https://i.imgur.com/5qwVYb1.jpeg'
        alt='Rainbow houses in Kampung Pelangi, Indonesia'
      />
    </div>
  );
};

export default AddRemoveCSS;
