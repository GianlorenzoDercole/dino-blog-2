

// Basic

// import React, {Component} from 'react'


// export default class List extends Component {
//   render() {
//       const fruitItems = this.props.fruits.map((fruit, i) => {
//           return <li key={`fruitItems${i}`}>{fruit}</li>
//       })

//     return (
//         <div>
//             <ul>
//                 {fruitItems}
//             </ul>
//         </div>

//     )
//   }
// }



//

import React, {Component} from 'react'


export default class List extends Component {
  render() {
      const fruitItems = this.props.fruits.map((fruit, i) => {
          return <li key={`fruitItems${i}`}>{fruit}</li>
      })
      const removedFruits = this.props.removedFruits.map((fruit, i) => {
          return <li key={`fruitItems${i}`}>{fruit}</li>
      })
    return (
        <div>
            <h2>filtered fruits</h2>
            <ul>
                {fruitItems}
            </ul>

            <h2>removed fruits</h2>
            <ul>
                {removedFruits}
            </ul>
        </div>

    )
  }
}
