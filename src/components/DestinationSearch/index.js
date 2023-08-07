// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSelectDestination = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              onChange={this.onSelectDestination}
              value={searchInput}
              placeholder="search"
              className="search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(eachItem1 => (
              <DestinationItem
                key={eachItem1.id}
                destinationDetails={eachItem1}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
