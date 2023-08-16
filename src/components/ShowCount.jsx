import React from "react";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ShowCount = ({ count, title }) => {
  console.log(`rendering ${title}...`);

  return (
    <p>
      {title} is {count}
    </p>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ShowCount);
