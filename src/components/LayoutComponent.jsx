import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponent = () => {
  const onSmallScreen = useWindowWidth(600);
  return (
    <div>
      <h1>You are browsing on {onSmallScreen ? "small" : "large"} device</h1>
    </div>
  );
};

export default LayoutComponent;
