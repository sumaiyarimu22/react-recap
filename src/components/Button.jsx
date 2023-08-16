import React from "react";
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Button = ({ handleClick, children }) => {
  console.log(`rendering button ${children}`);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Button);
