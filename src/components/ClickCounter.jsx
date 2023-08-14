// import withCounter from "./HOC/withCounter";

// // eslint-disable-next-line react-refresh/only-export-components
// const ClickCounter = (props) => {
//   // eslint-disable-next-line react/prop-types
//   const { count, incrementCount } = props;
//   return (
//     <div>
//       <button type="button" onClick={incrementCount}>
//         Clicked {count} times
//       </button>
//     </div>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export default withCounter(ClickCounter);

//render way

// eslint-disable-next-line react/prop-types
export default function ClickCounter({ count, incrementCount }) {
  // eslint-disable-next-line react/prop-types

  return (
    <div>
      <button type="button" onClick={incrementCount}>
        clicked {count} times
      </button>
    </div>
  );
}
