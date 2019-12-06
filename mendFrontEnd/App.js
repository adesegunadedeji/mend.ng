import React, {Component} from 'react';
import {View,Text,} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Avatar,Header,ListItem, Card, Button, Icon } from 'react-native-elements';

export default class MendApp extends Component{
  constructor(){
    super();
    this.state = {
      mechanic: []
    }
  }

  componentDidMount(){
    console.log("Component did Mount");
    this.getMends();
}
getMends = async()=>{
  try{
    const mechanic = await fetch(`http://localhost:3000/mends`,{
      credentials: "include"
    })
    const parsedResponse = await mechanic.json();
    console.log(`******************************************* 
    PARSED RESPONSE
    *******************************************`,
    parsedResponse);
      this.setState({
          mechanic: parsedResponse,
      })
  }
  catch(err){
    console.log(err)
  }
}

  render(){
    let mechanic = this.state.mechanic.map(mechanic => 
      {
    return(
      // <View key= {mechanic.id}>
        <ListItem key= {mechanic.id}
        title={mechanic.model}> </ListItem>
        // </View>
  
    )
  })
  return(  
    <View>
   <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'HOME', style: { color: '#fff' }, fontFamily: ""}}
    rightComponent={{ icon: 'home', color: '#fff' }}/>
       <View style={{ justifyContent: "center", alignItems: "center" }}>
       {mechanic}
      </View>
      </View>
    ) 
}
}
