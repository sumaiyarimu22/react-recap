import HoverCounter from "./HoverCounter";
import RenderCounter from "./RenderCounter";
import ThemeContext from "../contexts/themeContext";

// eslint-disable-next-line react/prop-types
const Content = () => {
  return (
    <div>
      <h1>This is a content</h1>
      <RenderCounter>
        {(counter, incrementCount) => {
          return (
            <ThemeContext.consumer>
              {({ theme }) => (
                <HoverCounter
                  count={counter}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </ThemeContext.consumer>
          );
        }}
      </RenderCounter>
    </div>
  );
};

export default Content;
