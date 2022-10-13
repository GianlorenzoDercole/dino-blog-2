import React, { Component} from 'react'

export default class Student extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.student.name}</h3>

            </div>
            )
    }
}
