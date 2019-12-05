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
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle:{
        backgroundColor: '#243447',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'Verdana-BoldItalic'
      }
    };
  };
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
    const { navigation } = this.props
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
           <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
           {/* <Buttgon onPress = {()=> this.props.navigation.push('Test')} title = "Go to Test aagain .."></Button> */}
           <Button
          title="Go to Details... again"
          onPress={() =>
         navigation.push('Test', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
            <Button
      title="Update the title"
      onPress={()=> this.props.navigation.setParams({otherParam:"updated!!"})}></Button>
</View>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle:{
      backgroundColor: '#243447',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Mansalva-Regular'
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Home Screen</Text>
        {/* <Button onPress = {()=> this.props.navigation.navigate('Test')} title = "Go to Test"></Button> */}
        <Button
          title="Go to Test"
          onPress={() => {
            this.props.navigation.navigate('Test', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        
  
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

