import React, { Component } from "react";
import "./DropDown.css";

class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="DropDown">
        <button
          type="button"
          className="DrioDown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && (
          <div className="DropDown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default DropDown;
