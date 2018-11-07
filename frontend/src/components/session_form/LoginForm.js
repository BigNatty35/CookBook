import React from "react";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import {closeModal} from '../../actions/modalActions';
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/questions');
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = Object.assign({}, this.state);
    this.props.loginUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Login Here!!
          <br />
          <div className="login-form">
            <br />
            <label>
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
              {errors.email}
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            {errors.password}
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}


const msp = state => ({
  errors: state.errors.errors,
  auth: state.auth
});

export default connect(msp, {loginUser, closeModal})(withRouter(LoginForm));
