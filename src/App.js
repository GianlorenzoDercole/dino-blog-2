// import logo from './logo.svg';
// import './App.css';
// import React, {Component} from 'react'
// import Post from './Post.jsx'
// class App extends Component {
//   render(){
//     const post = {
//       title: 'dinos awesome',
//       author: 'ste ste',
//       body: 'check out property',
//       comments: ['first', ' gp' , 'h t a']
//     }

//     return (
//       <div className="App">
//         <Post post={post} name='April'/>

//       </div>
//     );
//     }
// }

// export default App;



import React, { Component} from 'react'
import Roster from './Roster.jsx'

export default class App extends Component {

  students = [{name:'hi'},{name:'hi'},{name:'hi'}]

  render(){

    return (
      <>
        <Roster students={this.students}/>
      </>
    )
  }

}
