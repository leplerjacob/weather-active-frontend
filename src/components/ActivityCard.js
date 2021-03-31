import React, { Component } from 'react'

class ActivityCard extends Component {
    render() {
        return (
            <div className="card">
                 {this.props.activity.name} 
            </div>
        )
    }
}

export default ActivityCard
