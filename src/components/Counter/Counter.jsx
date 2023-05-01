import React from "react";
import "./Counter.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value valueProp={this.state.value} />
        <Controls
          onIncrement={this.handleIncrrement}
          onDecrement={this.handleDecrrement}
        />
      </div>
    );
  }
}

export default Counter;
