// // DINO  STATE NO FORM

// import logo from './logo.svg';
// import './App.css';
// import React, {Component} from 'react'
// import Post from './Post.jsx'
// class App extends Component {
//   state = {
//     title: 'dinos awesome',
//     author: 'ste ste',
//     body: 'check out property',
//     comments: ['first', ' gp' , 'h t a']
// }
//   // create a function that changes the body of state
//   changeBody = () => {
//     console.log('click')
//     const userInput = prompt('what shouls the current be')
//     this.setState({body: userInput})
//   }
//   render(){
//     const post = {
//       title: 'dinos awesome',
//       author: 'ste ste',
//       body: 'check out property',
//       comments: ['first', ' gp' , 'h t a']
//     }

//     return (
//       <div className="App">
//         <Post post={post} name='April' changeBody={this.changeBody} appState={this.state}/>


//       </div>
//     );
//     }
// }

// export default App;












// DINO


// import './App.css';
// import React, {Component} from 'react'
// import Post from './Post.jsx'

// // imiatation data from backend
// const posts = [
//     {
//       title: 'dinos awesome',
//       author: 'ste ste',
//       body: 'check out property',
//       comments: ['first', ' gp' , 'h t a']

//     },
//     {
//       title: 'dinos c',
//       author: 't rex',
//       body: 'cino words',
//       comments: ['second', ' hi' , 'stega']

//     }
// ]
// class App extends Component {
//   // state will be used to control the form
//   state = {
//     title: '',
//     author: '',
//     body: '',
//     comments: []

// }
//   // create a function that changes the body of state
//   changeBody = () => {
//     console.log('click')
//     const userInput = prompt('what shouls the current be')
//     this.setState({body: userInput})
//   }

//   // handle form change events
//   handleSubmit = e => {
//     // stop form resubmission
//     e.preventDefault()
//     console.log('hi')
//     // push to array
//     posts.push(this.state)
//     // clear state to reset controlled form
//     this.setState({
//       title:'',
//       author:'',
//       body:'',
//       comments:[]
//     })
//   }
//   //handle text change events in the form
//   handleTextChange = e => {
//     const updatedInput = {[e.target.name]: e.target.value}
//     this.setState(updatedInput)
//   }
//   render(){
//     // const post = {
//     //   title: 'dinos awesome',
//     //   author: 'ste ste',
//     //   body: 'check out property',
//     //   comments: ['first', ' gp' , 'h t a']
//     // }
//     const postComponents = posts.map((post, idx) => {
//       return <Post
//                 key={`post${idx}`}
//                 post={post}
//                 changeBody={this.changeBody}
//             />
//     })
//     return (
//       <div className="App">
//         {/* <Post post={post} name='April' changeBody={this.changeBody} appState={this.state}/> */}
//       {postComponents}
//       {/* <p>{this.state.input}</p> */}
//       <form onSubmit={this.handleSubmit}>
//         {/* each input will use the handleTextChange */}
//         <label htmlFor='post-title'>title:</label>
//         <input
//           type='text'
//           onChange={this.handleTextChange}
//           name='title'
//           id='post-title'
//           value={this.state.title}

//         />

//         <label htmlFor='post-author'>author:</label>
//         <input
//           type='text'
//           onChange={this.handleTextChange}
//           name='author'
//           id='post-author'
//           value={this.state.author}
//         />

//         <label htmlFor='post-body'>body:</label>
//         <input
//           type='text'
//           onChange={this.handleTextChange}
//           name='body'
//           id='post-body'
//           value={this.state.body}
//         />
//         <input type='submit'/>
//       </form>
//       </div>

//     );
//     }
// }

// export default App;





// STUDENT
// import React, { Component} from 'react'
// import Roster from './Roster.jsx'

// export default class App extends Component {

//   students = [{name:'hi'},{name:'hi'},{name:'hi'}]

//   render(){

//     return (
//       <>
//         <Roster students={this.students}/>
//       </>
//     )
//   }

// }





// CALC

// import React, {Component} from 'react'

// import Calc from './Calc.js'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Calc />
//         <h1>Calculator</h1>
//       </>
//     )
//   }
// }










// FRUIT FILTER

import React, {Component} from 'react'

import FruitContainer from './components/FruitContainer.jsx'

export default class App extends Component {
  render() {
    return (
      <>
        <FruitContainer />
      </>
    )
  }
}
