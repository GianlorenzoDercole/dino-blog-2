

// BASIC

// import React, { Component } from 'react'
// import List from './List'
// import Input from './Input'

// const starterFruits = [
//     'mango',
//     'apple',
//     'pineapple',
//     'strawberry'
// ]

// export default class FruitContainer extends Component {


//     // state will live here

//     state = {
//         // data to display in the list
//         fruitsToDisplay: starterFruits,
//         // data inout to use to filter fruits
//         filterValue: '',
//
//     }
//     // event handlers will live here that manipulate state
//     handleFilterChange = e => {
//         // what the user typed in
//         const filterValue = e.target.value
//         // loop over the fruits to display and filter and include them if they match what the user typed in
//         const filteredFruitList = this.state.fruitsToDisplay.filter(fruit => {
//             // return boolan if true the fruit will be kept
//             return fruit.toLowerCase().includes(filterValue.toLowerCase())

//         })
//         this.setState({
//             filterValue: filterValue,
//             fruitsToDisplay: filteredFruitList

//         })

//     }
//     render() {
//         return (
//             <div>
//                 <h1>fruit filter</h1>
//                 {/* pass event handlers to the input */}
//                 <Input
//                     handleFilterChange={this.handleFilterChange}
//                     value={this.state.filterValue}

//                 />

//                 {/* pass data from state to the list */}
//                 <List
//                     fruits={this.state.fruitsToDisplay}
//                 />
//             </div>
//         )
//     }
// }




// LISTS

import React, { Component } from 'react'
import List from './List'
import Input from './Input'

const starterFruits = [
    'mango',
    'apple',
    'pineapple',
    'strawberry'
]

export default class FruitContainer extends Component {


    // state will live here

    state = {
        // data to display in the list
        fruitsToDisplay: starterFruits,
        // data inout to use to filter fruits
        filterValue: '',
        //list of everything that didn't match
        fruitsFiltered: []
    }
    // event handlers will live here that manipulate state
    handleFilterChange = e => {
        // what the user typed in
        const filterValue = e.target.value
        // loop over the fruits to display and filter and include them if they match what the user typed in
        const filteredFruitList = starterFruits.filter(fruit => {
            // return boolan if true the fruit will be kept
            return fruit.toLowerCase().includes(filterValue.toLowerCase())

        })
        const fruitsFiltered = starterFruits.filter(fruit => {
            return !fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        this.setState({
            filterValue: filterValue,
            fruitsFiltered,
            fruitsToDisplay: filteredFruitList

        })

    }
    render() {
        return (
            <div>
                <h1>fruit filter</h1>
                {/* pass event handlers to the input */}
                <Input
                    handleFilterChange={this.handleFilterChange}
                    value={this.state.filterValue}

                />

                {/* pass data from state to the list */}
                <List
                    fruits={this.state.fruitsToDisplay}
                    removedFruits={this.state.fruitsFiltered}
                />
            </div>
        )
    }
}
