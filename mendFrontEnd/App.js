import React, {Component} from 'react'
import Secured from './src/screens/Secured'
import Login from './src/screens/Login'

export default class App extends Component{
    state = {
       isLoggedIn: false
    }

    render(){
        if (this.state.isLoggedIn)
        return(
            <Secured  onLogoutPress = {()=> this.setState({isLoggedIn:false})}/>
        )
        else 
        return (
            <Login onLoginPress = {()=> this.setState({isLoggedIn:true})}/>
        )
    }
}
