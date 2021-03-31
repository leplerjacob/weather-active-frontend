import React, { Component } from "react";

export default class SignIn extends Component {




  render() {

    return (
      <div class="signin row">
        <form class="col s12" onSubmit={(event) => console.log(event.target.name.username)}>
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">Username</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="submit" class="submit btn" value="Submit"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
