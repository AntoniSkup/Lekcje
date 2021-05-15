import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , TextInput, Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const arrayUzytkownikow = [
  {
    imie: "Marek",
    wiek: 14
  },
  {
    imie:"Bogumil",
    wiek: 32
  },

]



export default class App extends React.Component {

  state={
    liczba:1,
    tloZmiana:'',
    aktualneTlo:'white',

    array:["Mleko", "Mieso", "Drob"]

  }

  dodawanie(){

    let nowalicba = this.state.liczba +1
    this.setState({liczba:nowalicba})
  }

  odejmowanie(){

    let nowalicba = this.state.liczba -1
    this.setState({liczba:nowalicba})
  }


  zmianaTla() {

    const noweTlo = this.state.tloZmiana
    this.setState({aktualneTlo:noweTlo})
  }



  render() {
    return (
      <View style={{backgroundColor: this.state.aktualneTlo, flex:1, justifyContent: 'center', alignItems:'center' }}>
        <Text>Witaj</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
        onPress={ ()=>this.dodawanie()} 
        style={{backgroundColor:"blue", width:60, height:60,borderRadius:150, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: 'white'}}>Plus</Text>
        </TouchableOpacity>


        <TouchableOpacity 
        onPress={ ()=>this.odejmowanie()}
        style={{backgroundColor:"red", width:60, height:60,borderRadius:150, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: 'white'}}>Minus</Text>
        </TouchableOpacity>
        
          
      
          <Text style = {
            (this.state.liczba % 2 == 0)?
            
            {
              fontSize:30, fontWeight:'bold' , color: 'red'
            }
            :
            {fontSize:30, fontWeight:'bold' , color: 'blue'}
            }>
            {this.state.liczba}
        </Text>


        <TextInput
        onChangeText={input => this.setState({tloZmiana:input})}
         style={{width:screenWidth*.7,padding:10, height:50, borderRadius:10, backgroundColor: 'rgba(0,0,0,0.1)'}}
        />
        <TouchableOpacity 
        onPress={()=> this.zmianaTla()}
        
        style={{width:screenWidth*.3,height:60,backgroundColor:'green', borderRadius: 25, justifyContent: 'center' , alignItems: 'center'}}>
          <Text
          style={{color:'white'}}>Zmien tlo</Text>
      
        </TouchableOpacity>



      <View>
        <Text>{this.state.array[1]  }</Text>
        <Text>{ arrayUzytkownikow[0].imie + arrayUzytkownikow[0].wiek }</Text>
      </View>


      </View>
    );
  }
}