import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import ActivityCard from "./ActivityCard";
import Search from "./Search";
import Alert from './Alert'
import '../dashboard.css'

// let userDataUrl = `http://localhost:3000/users-location/${window.localStorage.getItem('user_id')}`
let userDataUrl = "http://localhost:3000/user-location/24";

class Dashboard extends Component {
  // Initial render will grab user associated data, like weather of their location and activities
  // When user searches a location, new fetch to location backend. location controller will return weather and activities for that searched location

  state = {
    location: null,
    weather: [],
    activities: [],
    timeframe: "",
    error: false,
    message: ""
  };

  componentDidMount() {
    fetch(userDataUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          location: data.city,
          weather: data.weathers,
          activities: data.activities,
        });
      });
  }

  renderWeather = () => {
    // console.log(this)
    return this.state.weather.map((weather) => (
      <WeatherCard weather={weather} />
    ));
  };
  renderActivities = () => {
    return this.state.activities.map((activity) => (
      <ActivityCard activity={activity} />
    ));
  };

  handleSearch = (zip) => {
    console.log(zip);
    fetch(`http://localhost:3000/location/${zip}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.message) {
          this.setState({
          location: data.location,
          weather: data.weathers,
          activities: data.activities,
          error: false
          });
        } else {
          this.setState({
            error: true,
            message: data.message
          })
        }
      });
  };

  render() {
    return (
      <div className="dashboard">
        <Search search={this.handleSearch} />
        {this.state.error ? <Alert message={this.state.message}/> : null }
        <div>{this.state.location}</div>
        <div className="column">{this.renderWeather()}</div>
        <div className="column">{this.renderActivities()}</div>
      </div>
    );
  }
}

export default Dashboard;
