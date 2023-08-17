import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponentTwo = () => {
  const onSmallScreen = useWindowWidth(768);
  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h1>This is another Component</h1>
    </div>
  );
};

export default LayoutComponentTwo;
