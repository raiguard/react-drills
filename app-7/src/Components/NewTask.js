import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  onInputKeyUp(e) {
    if (e.key === "Enter") {
      let { inputValue } = this.state;
      this.props.pushNewTask(inputValue);
      this.setState({ inputValue: "" });
    }
  }

  render() {
    return (
      <input
        className="floating-box"
        value={this.state.inputValue}
        placeholder="New task"
        onChange={(e) => this.onInputChange(e)}
        onKeyUp={(e) => this.onInputKeyUp(e)}
      />
    );
  }
}

export default NewTask;
