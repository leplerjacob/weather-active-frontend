import React, { Component } from 'react'

class Search extends Component {


    handleText = (e) => {
        this.props.search(e.target.value)
    }

    render() {
        return (
            <div>
                <input placeholder="Search" onChange={this.handleText}/>
            </div>
        )
    }
}

export default Search
