// Write your code here

import {Component} from 'react'
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
      eachDestination.name.includes(searchInput),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.onSelectDestination}
          value={searchInput}
        />
        <ul>
          {searchResults.map(eachItem1 => (
            <div className="items-container">
              <li className="list-item">
                <img
                  className="image"
                  src={eachItem1.imgUrl}
                  alt={eachItem1.name}
                />
                <p>{eachItem1.name}</p>
              </li>
              <li className="list-item">{}</li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
