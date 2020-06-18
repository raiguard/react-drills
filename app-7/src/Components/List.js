import React from "react";
import Todo from "./Todo";

export default (props) => {
  const tasks = props.tasks.map((task, i) => <Todo task={task} key={i} />);
  return <section className="floating-box">{tasks}</section>;
};
