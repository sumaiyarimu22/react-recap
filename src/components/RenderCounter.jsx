import React from "react";

export default class RenderCounter extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}
