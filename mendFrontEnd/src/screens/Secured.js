import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
import {Header} from 'react-native-elements';

export default class Secured extends Component{
   
        render() {
            return (
                <View style ={{justifyContent:"center", flex: 1, alignItems:'center'}}>
                            <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'WELCOME', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
                <ScrollView style={{padding: 80}}>
                    <Text style={{fontSize: 27}}>Welcome</Text>
                    <Button onPress={this.props.onLogoutPress} title="Logout"/>
                    </ScrollView>
                    </View>
                    )
         }
}