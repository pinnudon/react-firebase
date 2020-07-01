import React, { Component } from 'react'
import Fire from './Fire'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    logout(){
        Fire.auth().signOut()
    }
    render() {
        return (
            <div>
                <h1>Hey you are logged in</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home
