import React, { Component } from 'react'

class WeatherCard extends Component {
    render() {
        return (
            <div className="card">
                {this.props.weather.description + " " + this.props.weather.temperature} 
            </div>   
        )
    }
}

export default WeatherCard
