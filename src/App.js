import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Post from './Post.jsx'
class App extends Component {
  render(){
    const post = {
      title: 'dinos awesome',
      author: 'ste ste',
      body: 'check out property',
      comments: ['first', ' gp' , 'h t a']
    }

    return (
      <div className="App">
        <Post post={post} name='April'/>

      </div>
    );
    }
}

export default App;
