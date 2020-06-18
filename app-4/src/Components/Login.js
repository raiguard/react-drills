import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onUsernameInputChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordInputChange(e) {
    this.setState({ password: e.target.value });
  }

  onSubmitButtonClick() {
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
  }

  render() {
    const { username, password } = this.state;
    return (
      <section>
        <input value={username} placeholder="Username" onChange={(e) => this.onUsernameInputChange(e)}></input>
        <input value={password} placeholder="Password" onChange={(e) => this.onPasswordInputChange(e)}></input>
        <button onClick={() => this.onSubmitButtonClick()}>Submit</button>
      </section>
    );
  }
}

export default Login;
