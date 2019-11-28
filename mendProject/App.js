import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default  class MendContainer extends Component {
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
    console.log("*******************************************",parsedResponse);
    if(parsedResponse.code === 200){
      this.setState({
          mechanic: parsedResponse,
      })
      console.log("TWST")
  }
  }
  catch(err){
    console.log(err)
  }
}



  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is{this.state.mechanic.make}</Text>
      </View>
    );
  }
}

