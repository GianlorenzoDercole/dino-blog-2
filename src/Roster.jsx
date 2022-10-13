import React, { Component} from 'react'

import Student from './Student.jsx'

export default class Roster extends Component {
    render() {
        const studentArray = this.props.students.map((s, index)=> {
            return <Student student={s} key={index}/>
        })
        return (
        <>

            <h1>Reoster</h1>
            {studentArray}

        </>
        )
    }
}
