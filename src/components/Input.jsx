import React, {Component} from 'react'



export default class Input extends Component {
  render() {
    return (
      <div>
          <label htmlFor='fruitInput'>filter the fruits</label>
          <input
            type='text'
            id='fruitInput'
            value={this.props.value}
            onChange={this.props.handleFilterChange}

          />
      </div>
    )
  }
}
