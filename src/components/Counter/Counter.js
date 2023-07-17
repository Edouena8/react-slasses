import React from 'react';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  // constructor() {
  //     super();

  //     this.state = {
  //         value: 0,
  //     }
  // }

  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDercrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <Value value={this.state.value}/>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDercrement}
        />
      </div>
    );
  }
}

export default Counter;
