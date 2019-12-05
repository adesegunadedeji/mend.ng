/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class MendApp extends Component{
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
  //   render(){
  //     return(
  // <View style ={styles.sectionContainer}>
  //       <Text style={styles.sectionTitle}>Home</Text>
  //       </View>
  //     )
  //   }
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
      <Text>Car Brands</Text>
      <View>
      {mechanic}
      </View>
      </View>
    )
    }
}
export default MendApp;

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//     textAlign: "center",
//     fontFamily: 'Verdana-BoldItalic'
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });


