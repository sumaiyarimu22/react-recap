import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
import RenderCounter from "./components/RenderCounter";
import Section from "./components/Section";
import React from "react";
import ThemeContext from "./contexts/themeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <RenderCounter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </RenderCounter>

        <ThemeContext.Provider value={{ theme: theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
