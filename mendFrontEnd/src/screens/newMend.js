import React, {Component} from 'react'
import { TextInput, View, Text, Button} from 'react-native';
 class newMend extends Component{
     constructor(){
         super();
         state = {
            make: "",
            model: "",
            year: "",
            description:"",
            service: "",
            price:""
         }
     }

     createMendList = async()=>{
        try {
      const newMend = await fetch(`http://localhost:3001/mends`,{
        method: "POST",
        credentials:"include",
        body: JSON.stringify(formData),
        headers:{
          "Content-Type": "application/json",
          "acccept": "application/json"
        }
      })
      const parsedResponse = await newMend.json();
      console.log(parsedResponse)
      if(parsedResponse){
        this.setState({
          mechanic: [parsedResponse,...this.state.mechanic]
        })
      }
        } 
        catch (err) {
          console.log(err)
        }
      }

     handleChange=(e)=>{
        setState({
            [e.target.name]: e.target.value
        })
     }

     handleSubmit=(e)=>{
        this.createMendList(this.state)
     }

     render(){
         return(
             <View>
                 <Text style={{fontSize: 27}}>Enter Your Car Information</Text>
             <TextInput type="text" onChange={this.handleChange}>Model</TextInput>
             <TextInput type="text" onChange={this.handleChange}>Make</TextInput>
             <TextInput type="number" onChange={this.handleChange}>Year</TextInput>
             <Button onPress={this.handleSubmit}></Button>
             </View>
         )
     }
 }


export default newMend