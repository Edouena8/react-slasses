import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({
        activeOptionIdx: index,
    })
  }

  makeOptionClasses = (index) => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  }

  render() {
    const {activeOptionIdx} = this.state;
    const {options} = this.props;

    const {label} = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Chosen color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
              <button
                key={label}
                className={this.makeOptionClasses(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
