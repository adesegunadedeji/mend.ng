import React, {Component} from 'react';
import { View, Text,Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class MendContainer extends Component {
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
           <Button onPress = {()=> this.props.navigation.navigate('Home')} title = "Go to Home"></Button>
</View>
    )
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Home Screen</Text>
        <Button onPress = {()=> this.props.navigation.navigate('Test')} title = "Go to Test"></Button>
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Test: MendContainer
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

