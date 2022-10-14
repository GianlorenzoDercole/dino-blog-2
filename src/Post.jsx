//NO STATE

// import React, {Component} from 'react'

// import Comment from './Comment'
// class Post extends Component {
//     render() {
//         return (
//             <>
//             <h1>{this.props.post.title}</h1>
//             {this.props.post.comments.map(item => (
//                 // <li>{item}</li>
//                 <Comment message={item} />
//             ))}
//             </>
//         )
//     }
// }

// export default Post



// STATE

// import React, {Component} from 'react'

// import Comment from './Comment'
// class Post extends Component {
//     state = {
//         title: 'dinos awesome',
//         author: 'ste ste',
//         body: 'check out property',
//         comments: ['first', ' gp' , 'h t a']
//     }
//     render() {
//         return (
//             <>
//             <h1>{this.state.title}</h1>
//             {this.props.post.comments.map(item => (
//                 // <li>{item}</li>
//                 <Comment message={item} />
//             ))}
//             <button onClick={this.props.changeBody}>click</button>
//             </>
//         )
//     }
// }

// export default Post



// State in app

import React, {Component} from 'react'

import Comment from './Comment'
class Post extends Component {

    render() {
        return (
            <>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.appState.body}</p>
            {this.props.post.comments.map(item => (
                // <li>{item}</li>
                <Comment message={item} />
            ))}
            <button onClick={this.props.changeBody}>click</button>
            </>
        )
    }
}

export default Post
