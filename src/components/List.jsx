import React, {Component} from 'react'


export default class List extends Component {
  render() {
      const fruitItems = this.props.fruits.map((fruit, i) => {
          return <li key={`fruitItems${i}`}>{fruit}</li>
      })
    return (
        <div>
            <ul>
                {fruitItems}
            </ul>
        </div>

    )
  }
}
