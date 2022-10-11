import React, {Component} from 'react'

import Comment from './Comment'
class Post extends Component {
    render() {
        return (
            <>
            <h1>{this.props.post.title}</h1>
            {this.props.post.comments.map(item => (
                // <li>{item}</li>
                <Comment message={item} />
            ))}
            </>
        )
    }
}

export default Post
