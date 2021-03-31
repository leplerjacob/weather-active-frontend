import React, { Component } from "react";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";
const usersUrl = "http://localhost:3000/users";

class App extends Component {

  constructor(props){
    super(props)
    
    this.loginUser = this.loginUser.bind(this)
  }
  state = {
    user: null    
  };


  componentDidMount() {
    // Check if use is logged, if so we'll fill up state with user information
    let user = window.localStorage.getItem("user_id");
    if (user) {
      fetch(`http://localhost:3000/users/${user}`)
        .then((response) => response.json())
        .then((user) => {
          this.setState({
            user: user,
          });
        });
    }
  }

  loginUser(e) {
    e.preventDefault();

    let newUser = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
    };

    let reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newUser),
    };

    fetch(usersUrl, reqObj)
      .then((res) => res.json())
      .then((user) => {
        window.localStorage.setItem("user_id", user.id);
        this.setState({
          user: user,
        });
      });
  }

  checkIfLoggedIn() {
    if (this.state.user) {
      return <Dashboard />;
    } else {
      return <SignIn login={this.loginUser} />;
    }
  }

  render() {
    return (
      <div className="">
        <Header />
        {this.checkIfLoggedIn()}
      </div>
    );
  }
}

export default App;
