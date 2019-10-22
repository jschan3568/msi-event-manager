import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { withRouter } from "react-router";

const logo = "";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  static getDerivedStateFromProps(props) {
    if (props.err) {
      return {
        errors: props.err
      };
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(data, this.props.history);
  };

  render() {
    return (
      <div className="">
        <div className="">
          <div className="">
            <img
              className="login-logo"
              rel="preload"
              src={logo}
              alt="MSI Logo"
            />
            <h6>MSI Events - Login</h6>
            <form className="form" onSubmit={this.onSubmit}>
              <input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email Address"
                onChange={this.onChange}
                required
              />
              {this.state.errors.email && this.state.errors.email}
              <br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.onChange}
                required
              />
              {this.state.errors.password && this.state.errors.password}
              <br />
              <button type="submit" value="Login">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  err: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
