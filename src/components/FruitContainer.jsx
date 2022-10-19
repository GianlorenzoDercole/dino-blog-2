

import React, { Component } from 'react'
import List from './List'
import Input from './Input'

export default class FruitContainer extends Component {

    // state will live here

    // event handlers will live here that manipulate state

    render() {
        return (
            <div>
                <h1>fruit filter</h1>
                {/* pass event handlers to the input */}
                <Input />

                {/* pass data from state to the list */}
                <List />
            </div>
        )
    }
}
