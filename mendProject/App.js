import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  constructor(){
    super();
    this.state = {
      isShowingText: true
    }
  }

  


  // componentDidMount(){
  //   setInterval(()=>(
  //       this.setState(prevState=>(
  //         { isShowingText: !prevState.isShowingText}
  //         ))), 1000)
  //   }

    componentDidMount(){
      // Toggle the state every second
      setInterval(() => (
        this.setState(previousState => (
          { isShowingText: !previousState.isShowingText }
        ))
      ), 1000);
    }
  

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Adesegun' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}