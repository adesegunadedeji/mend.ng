import React, { Component } from 'react';
import { Avatar, Header, Tile} from 'react-native-elements';
import PasswordInputText from 'react-native-hide-show-password-input';

import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

class Login extends Component{
    constructor(){
        super();
        state={
        username: null,
        password: null
    }
}
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
         })
    }
  render(){
      return(
          <View style ={{justifyContent:"center", flex: 1, alignItems:'center'}}>
              <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'LOGIN', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
          <ScrollView style = {{padding:80}} >
          <Text style={{fontSize: 27}} >Login</Text>
          <Avatar
          Image size={60} 
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}/>

            <TextInput name="username" type="text" widthcc placeholder="username" onChange={this.handleChange}></TextInput>
            <PasswordInputText size={20} name="password" type="password" onChange={this.handleChange}></PasswordInputText>
            <Button onPress={this.props.onLoginPress}title="Submit"/>
          </ScrollView>
          </View>
      )
  }
}
export default  Login