import React, { Component } from "react";
import NewTask from "./Components/NewTask";
import List from "./Components/List";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.pushNewTask = this.pushNewTask.bind(this);
  }

  pushNewTask(task) {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  render() {
    return (
      <section className="app">
        <NewTask pushNewTask={this.pushNewTask} />
        <List tasks={this.state.tasks} />
      </section>
    );
  }
}

export default App;
