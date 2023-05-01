import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIndx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIndx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIndx) {
      optionClasses.push("ColorPicker__option--active");
    }
    return optionClasses.join(" ");
  };

  render() {
    const { activeOptionIndx } = this.state;
    const { options } = this.props;

    const activeOption = options[activeOptionIndx];
    
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>

        <p>Выбран цвет: {activeOption.label} </p>

        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
