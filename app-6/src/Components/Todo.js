import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render = () => <p className="task">{this.props.task}</p>;
}

export default Todo;
