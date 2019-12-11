import React,{Component} from 'react'
import {Text,View,ScrollView, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Avatar,Header,ListItem, Card,Tile, Icon} from 'react-native-elements';


class MendList extends Component{
  static navigationOptions = {
    title: 'CAR LIST',
    headerStyle: {
      backgroundColor: '#f4511e',
      icon: 'home'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <Icon
        containerStyle={styles.icon}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
      />
    ),
    headerRight: (
      <View style={styles.iconContainer}>
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
        {/* <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-heart" : "md-heart"} />
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-more" : "md-more"} /> */}
      </View>
    )
  };

constructor(){
  super();
  state={
    mechanic=[]
  }
}

//LIFECYCLE METHOD
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

updateMendList= async()=>{

  try{
    const updateMend = await fetch(`http://localhost:3001/mends/${id}`,{
      method: "PUT",
      body: JSON.stringify(FormData),
      headers:{
        "Content-Type": "applicatin/json"
      }
    })
    const parsedResponse = await updateMend.json();
    console.log("Parsed Response!!!!", parsedResponse)
  }
  catch(err){
    console.log(err)
  }
}

deleteMend = async()=>{
  try {
    await fetch(`http://localhost:3001/mends/${id}`,{
      method: "DELETE"

    })
    this.setState({
      mechanic: this.state.mechanic.filter(mechanic=>mechanic.id !==id)
    })
  } 
  catch (err) {
    console.log(err)
    
  }
}

render(){
  let mechanic=this.state.mechanic.map(mechanic=>{
    return(
      <ScrollView key={mechanic.id}>
        <Text style={{fontSize: 27}}>{mechanic.model}</Text>
        <Button onPress={() => this.props.navigation.navigate('Details')}/>
      </ScrollView>
    )
  })
  return(
    <View>
      {mechanic}
  </View>
  )
}
}

export default MendList