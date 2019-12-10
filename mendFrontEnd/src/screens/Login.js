import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

class Login extends Component{
    state={
        username: null,
        password: null
    }

    handleChange=(e)=>{
        setState({
            [e.target.name]:e.target.value
         })
         console.log(this.state)
    }
  render(){
      return(
          <ScrollView style = {{padding:20}}>
              <Text style={{fontSize: 27 }} >Login</Text>
              <TextInput name="username" placeholder="Username" onChange={this.handleChange}></TextInput>
              <TextInput placeholder="Password" type="password" onChange={this.handleChange}></TextInput>
              <Button onPress={this.props.onLoginPress}title="Submit"/>
          </ScrollView>
      )
  }
}

export default  Login