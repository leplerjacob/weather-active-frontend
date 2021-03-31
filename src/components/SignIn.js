import React, { Component } from "react";

export default class SignIn extends Component {



  render() {
    return (
      <div className="signin row">
        <form className="col s12" onSubmit={this.props.login}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                name="username"
              />
              <label htmlFor="first_name">Username</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="submit"
                type="submit"
                className="submit btn"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
