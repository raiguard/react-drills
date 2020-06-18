import React, { Component } from "react";
import Todo from "./Components/Todo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      taskList: []
    };
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  onInputKeyUp(e) {
    if (e.key === "Enter") {
      let { inputValue, taskList } = this.state;
      taskList.push(inputValue);
      this.setState({ inputValue: "", taskList: taskList });
    }
  }
  render() {
    const taskList = this.state.taskList.map((task, i) => <Todo task={task} key={i} />);
    return (
      <div className="app">
        <input
          className="floating-box"
          value={this.state.inputValue}
          placeholder="New task"
          onChange={(e) => this.onInputChange(e)}
          onKeyUp={(e) => this.onInputKeyUp(e)}
        />
        <div className="floating-box">{taskList}</div>
      </div>
    );
  }
}

export default App;
