import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Avatar,Header,ListItem, Card, Button, Icon} from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});

class MendApp extends Component{
  static navigationOptions = {
    title: 'WELCOME',
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
        <ListItem  key= {mechanic.id}
        title={mechanic.model}> </ListItem>
        // </View>
  
    )
  })
  return(  
    <View>
       <View style={{ justifyContent: "center", alignItems: "center" }}>
       <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
       {mechanic}
      </View>
      </View>
    ) 
}
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: MendApp,
    Details: DetailsScreen,
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