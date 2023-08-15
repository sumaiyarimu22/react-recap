import React from "react";

export default class MyComponents extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `clicked ${count} times`;
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `clicked ${count} times`;
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
    console.log(`clock ticking!`);
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time:{date.toLocaleTimeString()}</p>
        <p>
          <button type="button" onClick={this.addClick}>
            Click
          </button>
        </p>
      </div>
    );
  }
}
