import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'password'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log(event)
    console.log(this.state)
    if(this.state.password === 'admin1234567') {
      alert('Successfully Logged In')
    } else {
      alert('Incorrect Password: ' + this.state.password + '\nCorrect Password: admin1234567');
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <textarea value={this.state.username} onChange={this.handleUsernameChange} />
        </label>
        <label>
          Password:
          <textarea value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;