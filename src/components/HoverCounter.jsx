// import withCounter from "./HOC/withCounter";

// // eslint-disable-next-line react-refresh/only-export-components
// const HoverCounter = (props) => {
//   // eslint-disable-next-line react/prop-types
//   const { count, incrementCount } = props;
//   return (
//     <div>
//       <h1 onMouseOver={incrementCount}>Clicked {count} times</h1>
//     </div>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export default withCounter(HoverCounter);

//render way

// eslint-disable-next-line react/prop-types
export default function HoverCounter({ count, incrementCount }) {
  // eslint-disable-next-line react/prop-types

  return (
    <div>
      <h1 onMouseOver={incrementCount}> Hoveres {count} times</h1>
    </div>
  );
}
