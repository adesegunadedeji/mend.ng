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



  render() {
   let mechanic = this.state.mechanic.map(mechanic =>{
      console.log(mechanic.id)
      return(
      <View key= {mechanic.id}> 
      <Text>{mechanic.make}</Text>
      </View>
      )
    })
    return(
 
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  {mechanic}
           <Text>Mechanic Roster</Text>
</View>
    )
  }
}

