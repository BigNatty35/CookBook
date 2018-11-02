import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    axios.post('/api/users/register', user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const {errors} = this.state;

    return ( 
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Register Here!!
          <br />
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="login-input"
              />
              {errors.name}
            </label>
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
              {errors.email}
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
              {errors.password}
            </label>
            <label>Re-enter Password:
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                className="login-input"
              />
              {errors.password2}
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}




export default withRouter(SignUpForm);