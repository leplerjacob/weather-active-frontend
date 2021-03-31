import React, { Component } from "react";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard"
import "./App.css";


class App extends Component {

  state = {
    user: null,
    location: null,
    weather: null,
    activities: null,
    timeframe: ""
  }

  componentDidMount(){
    // Check if use is logged, if so we'll fill up state with user information
    let user = window.localStorage.getItem("user_id")
    if (user){
      fetch(`http://localhost:3000/users/${user}`).then(response => response.json()).then(user => {
        this.setState({
          user: user
        })
      })
    }
  }

  checkIfLoggedIn(){
    if(this.state.user) {
      return <Dashboard />
    } else {
      return <SignIn />
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
