import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <img src={this.props.url} />
      </section>
    );
  }
}

export default Image;
