import { Component } from "react";
import { Controls } from "./Controls";
import { Progress } from "./Progress";
import { Publication } from "./Publication";

const LS_KEY = "reader_item_index";

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({ index: state.index + value }));
  };

  componentDidMount = () => {
    const savedState = localStorage.getItem(LS_KEY);

    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  };

  componentDidUpdate = (__, prevState) => {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = this.props.items.length;
    const currentItem = items[index];

    return (
      <div>
        <Controls
          onChange={this.changeIndex}
          currentItem={index + 1}
          totalItem={totalItems}
        />

        <Progress current={index + 1} total={totalItems} />

        <Publication item={currentItem} />
      </div>
    );
  }
}
