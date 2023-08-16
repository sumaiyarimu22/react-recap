import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponentTwo = () => {
  const onSmallScreen = useWindowWidth();
  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h1>This is another Component</h1>
    </div>
  );
};

export default LayoutComponentTwo;
