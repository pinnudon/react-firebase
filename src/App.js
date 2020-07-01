import React, { Component } from 'react';
import './App.css';
import Fire from './config/Fire'
import Home from './config/Home'
import Login from './config/Login'
import ContactForm from './config/ContactForm'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }
  componentDidMount(){
    this.authListener()
  }
  authListener(){
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }else{
        this.setState({user : null})
      }
    })
  }
  render(){
    return (
      <div className='App'>
        <div>
        <ContactForm />
        </div>
        {this.state.user ? (<Home />) : (<Login />)}
        {/* <div>
        <ContactForm />
        </div> */}
      </div>
    );
  }
}
// function App() {

// }

export default App;
